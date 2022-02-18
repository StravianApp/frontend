import './flock.scss';
import glass from './assets/magglass.png'
import { useRef, useState } from 'react';
import { getFriendUpdates, getFriends, newFriend } from '../../utils/api';
const friendUpdates = getFriendUpdates();
const friends = getFriends();


const Flock = () => {
    const friendName = useRef(null);

    function whenClick(friendName) {
        if (newFriend(friendName)==true) { 
            return(<div className='text-flockmates'>Success! Another friend flies with you!</div>) 
        } else {
            return(<div className='text-flockmates'>What the flock!? That friend isn't flying at the moment.</div>) 
        }
    }

    return <div className='flock-main'>
        <div className='title'>
            Your Flock
        </div>
        <div className='find-new'>
            <img className="magglass" src={glass} alt="Magnifying glass" />
            Find a new Flockmate
        </div>
        <div className='in'>
            <input type="text" name="input" ref={friendName}/>
            <button onClick={() => (newFriend(friendName)==true ? (<div className='text-flockmates'>Success! Another friend flies with you!</div>) : (<div className='text-flockmates'>What the flock!? That friend isn't flying at the moment.</div>))}>SEARCH</button>
        </div>
        <div className='break'> </div>
        <div className='header-updates'>
            Updates from Your Flock:
        </div>
        {friendUpdates.map((e) => <div className='text-updates'>{e}</div>)}
        <div className='break'> </div>
        <div className='header-flockmates'>
            Your Flockmates:
            {/*Add ability to remove friends here?*/}
        </div>
        {friends.map((e) => <div className='text-flockmates'>{e}</div>)}
    </div>
}

export default Flock;