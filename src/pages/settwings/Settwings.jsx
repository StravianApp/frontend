import './settwings.scss';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState, Component } from 'react';
import { Logout } from '../../utils/api';

const Settwings = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
    });
    
    return <div className='settwings-main'>
        <div className='title'>
            Settwings
        </div>
        <button className="press" onClick={() => Logout()}>Logout</button>
        
        <button className="press" onClick={()=> setState({isPaneOpen: true})}>Change units</button>
        <SlidingPane isOpen={state.isPaneOpen} title="Units"
        onRequestClose={() => {setState({ isPaneOpen: false })}}>
            <div>{/*Buttons for change units here*/}</div> 
        </SlidingPane>
    </div>
}
export default Settwings;