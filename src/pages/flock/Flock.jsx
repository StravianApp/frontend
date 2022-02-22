import './flock.scss';
import glass from './assets/magglass.png'
import { useRef, useState, Button } from 'react';
import { noFriend, newFriend, getFriendUpdates, getFriends } from '../../utils/api';
const friendUpdates=getFriendUpdates();
const friends=getFriends();

const Flock = () => {
    const friendName = useRef(null);

    return <div className='flock-main'>
        <div className='title'>
            Your Flock
        </div>
        <div className='find-new'>
            <img className="magglass" src={glass} alt="Magnifying glass" />
            Find a new Flockmate
        </div>
        <div className='in'>
            <form onClick={() => (newFriend(friendName) ? (<div className='text-flockmates'>Success! Another friend flies with you!</div>) : (<div className='text-flockmates'>What the flock!? That friend isn't flying at the moment.</div>))}>
                <input type="text" name="input" className="search-box" ref={friendName}/>
                <input type="submit" className="search-button" value="Search"></input>
            </form>
        </div>
        <div className='break'> </div>
        <div className='header-updates'>
            Updates from Your Flock:
        </div>
        {friendUpdates.map((e) => <div className='text-updates'>{e}</div>)}
        <div className='break'> </div>
        <div className='header-flockmates'>
            Your Flockmates:
        </div>
        {friends.map((e) => <div className='text-flockmates'>{e}<button className="remove" onClick={() => noFriend(e)}>Remove</button></div>)}
    </div>
}
export default Flock;