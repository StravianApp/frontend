import './settwings.scss';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useEffect, useState } from 'react';
import poweredBy from '../../assets/powered-by-strava.svg';
import theme from './theme.scss';
import { changeUnitsDis, leaderbirdVisible, deleteAccount, getDisUnit2, getLeaderbirdVis } from '../../utils/api';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Settwings = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        paneOpen: false,
    });

    const [visibility, setVisibility] = useState('everyone');

    const showUpdatedLeaderbirdVis = () => {
        getLeaderbirdVis().then((v) => setVisibility(v));
    };

    const [disUnit, setDisUnit] = useState('kilometres');

    const showUpdatedDisUnit = () => {
        getDisUnit2().then((v) => setDisUnit(v));
    };

    useEffect(() => {
        showUpdatedDisUnit();
        showUpdatedLeaderbirdVis();
    }, []);


    return <div className="page-container">
        <div className='page-header'>
            Settwings
        </div>

        <div className='settwings-main page-main'>

            <div className="btns">
                <button className="press1" onClick={() => setState({ isPaneOpen: true })}>Preferences</button>
                <button className="press1" onClick={() => setState({ paneOpen: true })}>Privacy Settings</button>
                <button className="press1" onClick={() => window.location.href = '/app/logout'}>Logout</button>
            </div>
            <SlidingPane theme={theme} isOpen={state.isPaneOpen} title="Units" onRequestClose={() => { setState({ isPaneOpen: false }) }}>
                {/* <div className="text1"> Units for Temperature
                    <button className="press" onClick={() => changeUnitsTemp(1)}>Celsius</button>
                    <button className="press" onClick={() => changeUnitsTemp(2)}>Fahrenheit</button>
                    <button className="press" onClick={() => changeUnitsTemp(3)}>Kelvin</button>
                    <i>Your current unit for temperature is <b>{tempUnit}</b></i>
                </div> */}
                <div className="text1"> Units for Distance
                    <button className="press" onClick={() => changeUnitsDis(0).then(showUpdatedDisUnit)}>Kilometres</button>
                    <button className="press" onClick={() => changeUnitsDis(1).then(showUpdatedDisUnit)}>Miles</button>
                    <button className="press" onClick={() => changeUnitsDis(2).then(showUpdatedDisUnit)}>Wingspans</button>
                    <i>Your current unit for distance is set to <b>{disUnit}</b></i>
                </div>
            </SlidingPane>


            <div> <SlidingPane isOpen={state.paneOpen} title="Privacy" onRequestClose={() => { setState({ paneOpen: false }) }}>
                <div className="text1"> Leaderbird Visibility
                    <button className="press" onClick={() => leaderbirdVisible(0).then(showUpdatedLeaderbirdVis)}>Invisible</button>
                    <button className="press" onClick={() => leaderbirdVisible(1).then(showUpdatedLeaderbirdVis)}>Flock Mates</button>
                    <button className="press" onClick={() => leaderbirdVisible(2).then(showUpdatedLeaderbirdVis)}>Everyone</button>
                    <i>Your current visibility is set to <b>{visibility}</b></i>
                </div>
                <div className="text2"> Account deletion - beware!
                    <Popup trigger={<button className="press">Delete Account</button>}>
                        <div className='pop-up'>This will delete your account. Are you sure?<button className='press2' onClick={() => { deleteAccount(); window.location.href = '/app/logout' }}>Yes</button> </div>
                    </Popup>
                </div>
            </SlidingPane> </div>
        </div>

        <div className="strava-container">
            <a href="https://www.strava.com/">
                <img className="strava" src={poweredBy} alt="Powered by Strava" />
            </a>
        </div>
    </div>
}

export default Settwings;