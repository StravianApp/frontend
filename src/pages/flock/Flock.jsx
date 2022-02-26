import './flock.scss';
import glass from './assets/magglass.png'
import { useRef, useState } from 'react';
import { noFriend, newFriend, getFriendUpdates, getFriends } from '../../utils/api';
import { getUsername } from '../../utils/login';

import { Row, Col } from 'reactstrap';

const friendUpdates = getFriendUpdates();
const friends = getFriends();

const Flock = () => {
    const friendName = useRef(null);
    const [friendMessage, setFriendMessage] = useState('');

    return <div className="page-container">

        <div className="page-header">Your Flock</div>

        <div className='flock-main page-main'>

            <div className="your-username content-box">
                Your username is <b>{ getUsername() }</b>.
            </div>
            <div className="add-friend content-box">

            <div className='find-new'>
                <img className="magglass" src={glass} alt="Magnifying glass" />
                Find a new Flockmate
            </div>
            <div className='in'>
                <Row>
                    <Col xs={9}>
                        <input type="text" name="input" className="search-box" ref={friendName} />
                    </Col>
                    <Col xs={3}>
                        <input type="button" className="search-button" value="Search" onClick={() => {
                            if (newFriend(friendName.current.value)) setFriendMessage('Success! Another friend flies with you!');
                            else setFriendMessage('What the flock!? That friend isn\'t flying at the moment.');
                        }} />
                    </Col>
                </Row>
                <div className="friend-text">{friendMessage}</div>
            </div>
            </div>




            <hr className="section-divider" />

            <div className="content-box">
                <div className='subtitle_'>
                    Updates from Your Flock
                </div>
                {friendUpdates.map((e) => <div className='text_ text-updates'>{e}</div>)}
            </div>

            <hr className="section-divider" />

            <div className="content-box">
                <div className='subtitle_'>
                    Your Flockmates
                </div>
                {friends.map((e) => <div className='text_ text-flockmates'>{e}<button className="remove" onClick={() => noFriend(e)}>Remove</button></div>)}
            </div>
            <br /><br />
        </div>
    </div>

}

export default Flock;