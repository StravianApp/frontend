import './flock.scss';
import glass from './assets/magglass.png'
import { useRef, useState } from 'react';
import { noFriend, newFriend, getFriendUpdates, getFriends } from '../../utils/api';
const friendUpdates=getFriendUpdates();
const friends=getFriends();

const Flock = () => {
    const friendName = useRef(null);
    const [friendMessage, setFriendMessage] = useState('');

    return <div className='flock-main'>
        <div className='title_'>
            Your Flock
        </div>
        <div className='find-new'>
            <img className="magglass" src={glass} alt="Magnifying glass" />
            Find a new Flockmate
        </div>
        <div className='in'>
            <input type="text_" name="input" className="search-box" ref={friendName}/>
            <input type="button" className="search-button" value="Search" onClick={() => {
                if (newFriend(friendName.current.value)) setFriendMessage('Success! Another friend flies with you!');
                else setFriendMessage('What the flock!? That friend isn\'t flying at the moment.');
            }} />
            <div className="text_">{ friendMessage }</div>
        </div>

        <hr className="section-divider" />

        <div className='header-updates'>
            Updates from Your Flock
        </div>
        {friendUpdates.map((e) => <div className='text-updates'>{e}</div>)}
        <hr className="section-divider" />
        <div className='header-flockmates'>
            Your Flockmates
        </div>
        {friends.map((e) => <div className='text-flockmates'>{e}<button className="remove" onClick={() => noFriend(e)}>Remove</button></div>)}
    </div>
}

export default Flock;