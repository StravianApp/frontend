import './settwings.scss';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from 'react';
import { changeUnitsTemp, changeUnitsDis, leaderbirdVisible, deleteAccount } from '../../utils/api';
import theme from './theme.scss';

const Settwings = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        paneOpen: false,
    });
    
    return <div className='settwings-main'>
        <div className='title'>
            Settwings
        </div>
        <button className="press" onClick={() => window.location.href = '/app/logout'}>Logout</button>

        <button className="press" onClick={()=> setState({isPaneOpen: true})}>Change Units</button>
        <SlidingPane theme={theme} isOpen={state.isPaneOpen} title="Units" onRequestClose={() => {setState({ isPaneOpen: false })}}>
            <div className="text1"> Units for Temperature
            <button className="press" onClick={()=> changeUnitsTemp("celsius")}>Celsius</button>
            <button className="press" onClick={()=> changeUnitsTemp("fahrenheit")}>Fahrenheit</button>
            <button className="press" onClick={()=> changeUnitsTemp("kelvin")}>Kelvin</button>
            </div>
            <div className="text2"> Units for Distance
            <button className="press" onClick={()=> changeUnitsDis("kilometre")}>Kilometres</button>
            <button className="press" onClick={()=> changeUnitsDis("mile")}>Miles</button>
            <button className="press" onClick={()=> changeUnitsDis("neelu")}>Watts per Newton Hertz</button>
            </div>
        </SlidingPane>

        <button className="press" onClick={()=> setState({paneOpen: true})}>Privacy</button>
        <div> <SlidingPane isOpen={state.paneOpen} title="Privacy" onRequestClose={() => {setState({ paneOpen: false })}}>
            <div className="text1"> Leaderbird Visibility
            <button className="press" onClick={()=> leaderbirdVisible("invisible")}>Invisible</button>
            <button className="press" onClick={()=> leaderbirdVisible("friends")}>Friends</button>
            <button className="press" onClick={()=> leaderbirdVisible("global")}>Everyone</button>
            </div>
            <div className="text2"> Account deletion - beware!
            <button className="press" onClick={()=> deleteAccount()}>Delete Account</button>
            </div>
        </SlidingPane> </div>
    </div>
}

export default Settwings;