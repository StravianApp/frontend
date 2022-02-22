import './settwings.scss';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState, Component } from 'react';
import { changeUnits, Logout, leaderbirdVisible, deleteAccount } from '../../utils/api';

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
            <div></div> 
        </SlidingPane>

        <button className="press" onClick={()=> setState({paneOpen: true})}>Privacy</button>
        <SlidingPane className="slide-pane" overlayClassName="slide-pane-overlay" isOpen={state.paneOpen} title="Privacy" onRequestClose={() => {setState({ paneOpen: false })}}>
        <button className="press" onClick={()=> changeUnits("kelvin")}>Kelvin</button>
        </SlidingPane>
    </div>
}
export default Settwings;