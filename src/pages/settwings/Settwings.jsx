import './settwings.scss';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from 'react';
import { changeUnitsTemp, changeUnitsDis, Logout, leaderbirdVisible, deleteAccount } from '../../utils/api';

const Settwings = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        paneOpen: false,
    });
    
    return <div className='settwings-main'>
        <div className='title'>
            Settwings
        </div>
        <button className="press" onClick={() => Logout()}>Logout</button>

        <button className="press" onClick={()=> setState({isPaneOpen: true})}>Change Units</button>
        <SlidingPane className="slide-pane" overlayClassName="slide-pane-overlay" isOpen={state.isPaneOpen} title="Units" onRequestClose={() => {setState({ isPaneOpen: false })}}>
            <div className="units"> Units for Temperatture
            <button className="units" onClick={()=> changeUnitsTemp("celsius")}>Celsius</button>
            <button className="units" onClick={()=> changeUnitsTemp("fahrenheit")}>Fahrenheit</button>
            <button className="units" onClick={()=> changeUnitsTemp("kelvin")}>Kelvin</button>
            </div>
            <div> Units for Distance
            <button className="press" onClick={()=> changeUnitsDis("kilometre")}>Kilometres</button>
            <button className="press" onClick={()=> changeUnitsDis("mile")}>Miles</button>
            <button className="press" onClick={()=> changeUnitsDis("neelu")}>Watts per Newton Hertz</button>
            </div>
        </SlidingPane>

        <button className="press" onClick={()=> setState({paneOpen: true})}>Privacy</button>
        <SlidingPane className="slide-pane" overlayClassName="slide-pane-overlay" isOpen={state.paneOpen} title="Privacy" onRequestClose={() => {setState({ paneOpen: false })}}>
            <button className="press" onClick={()=> deleteAccount()}>Delete Account</button>
            <div> Leaderbird Visibility
            <button className="press" onClick={()=> leaderbirdVisible("invisible")}>Invisible</button>
            <button className="press" onClick={()=> leaderbirdVisible("friends")}>Friends</button>
            <button className="press" onClick={()=> leaderbirdVisible("global")}>Everyone</button>
            </div>
        </SlidingPane>
    </div>
}
export default Settwings;