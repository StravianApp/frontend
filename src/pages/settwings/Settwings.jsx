import './settwings.scss';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from 'react';
import poweredBy from '../../assets/powered-by-strava.svg';
import theme from './theme.scss';
import { changeUnitsDis, leaderbirdVisible, deleteAccount, getDisUnit, getLeaderbirdVis } from '../../utils/api';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const disUnit = getDisUnit();
//const tempUnit = getTempUnit();
const visibility = getLeaderbirdVis();


const Settwings = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        paneOpen: false,
    });

    return <div className="page-container">
        <div className='page-header'>
            Settwings
        </div>

        <div className='settwings-main page-main'>

            <div className="btns">
                <button className="press1" onClick={() => window.location.href = '/app/logout'}>Logout</button>
                <button className="press1" onClick={() => setState({ isPaneOpen: true })}>Change Units</button>
                <button className="press1" onClick={() => setState({ paneOpen: true })}>Privacy</button>
            </div>
            <SlidingPane theme={theme} isOpen={state.isPaneOpen} title="Units" onRequestClose={() => { setState({ isPaneOpen: false }) }}>
                {/* <div className="text1"> Units for Temperature
                    <button className="press" onClick={() => changeUnitsTemp(1)}>Celsius</button>
                    <button className="press" onClick={() => changeUnitsTemp(2)}>Fahrenheit</button>
                    <button className="press" onClick={() => changeUnitsTemp(3)}>Kelvin</button>
                    <i>Your current unit for temperature is <b>{tempUnit}</b></i>
                </div> */}
                <div className="text1"> Units for Distance
                    <button className="press" onClick={() => changeUnitsDis(1)}>Kilometres</button>
                    <button className="press" onClick={() => changeUnitsDis(2)}>Miles</button>
                    <button className="press" onClick={() => changeUnitsDis(3)}>Furlongs</button>
                    <i>Your current unit for distance is <b>{disUnit}</b></i>
                </div>
            </SlidingPane>


            <div> <SlidingPane isOpen={state.paneOpen} title="Privacy" onRequestClose={() => { setState({ paneOpen: false }) }}>
                <div className="text1"> Leaderbird Visibility
                    <button className="press" onClick={() => leaderbirdVisible(1)}>Invisible</button>
                    <button className="press" onClick={() => leaderbirdVisible(2)}>Friends</button>
                    <button className="press" onClick={() => leaderbirdVisible(3)}>Everyone</button>
                    <i>Your current visibility is set to <b>{visibility}</b></i>
                </div>
                <div className="text2"> Account deletion - beware!
                    <Popup trigger={ <button  className="press">Delete Account</button>}>
                        <div className='pop-up'>This will delete your account. Are you sure?<button  className='press2' onClick={() => deleteAccount()}>Yes</button> </div>
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