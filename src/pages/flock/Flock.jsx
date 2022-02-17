import './flock.scss';
import glass from './assets/magglass.png'
import { useRef, useState } from 'react';
import { getFriendUpdates, getFriends, newFriend } from '../../utils/api';
const friendUpdates = getFriendUpdates();
const friends = getFriends();


const Flock = () => {
    const friendNameEl = useRef(null);
    const [friendExists, setFriendExists] = useState(null);

    return <div className='flock-main'>
        <div className='title'>
            Your Flock
        </div>
        <div className='find-new'>
            <img className="magglass" src={glass} alt="Magnifying glass" />
            Find a new Flockmate
        </div>
        <div className='in'>
            <input type="text" name="input" ref={friendNameEl} onKeyDown={(e) => (e.key == 'enter') ? setFriendExists(newFriend(friendNameEl.current.value)) : null} />
            {friendExists ? <div className='text-flockmates'>Success! Another friend flies with you!</div> : <div className='text-flockmates'>What the flock!? That friend isn't flying at the moment.</div>}
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
        {friends.map((e) => <div className='text-flockmates'>{e}</div>)}
    </div>
}

export default Flock;