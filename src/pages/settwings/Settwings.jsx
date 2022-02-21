import './settwings.scss';
import { useRef, useState, Button } from 'react';
import { Logout } from '../../utils/api';

const Settwings = () => {
    return <div className='settwings-main'>
        <div className='title'>
            Settwings
        </div>
        <button className="press" onClick={() => Logout()}>Logout</button>
        {/*
        Button to move to sliding draw for provacy settings - what privacy settings? 
        Button to moce to units?
        */}
    </div>
}
export default Settwings;