import './flock.scss';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'reactstrap';
import { noFriend, newFriend, getFriendRequests, getFriends } from '../../utils/api';
import { getStravaId, getUsername } from '../../utils/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Row, Col } from 'reactstrap';

const Flock = () => {
    const friendName = useRef(null);
    const [friendMessage, setFriendMessage] = useState(null);
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState({ incoming: [], outgoing: [] });

    const updateFriends = () => {
        getFriends().then((f) => setFriends(f));
    }
    const updateFriendRequests = () => {
        getFriendRequests().then((f) => setFriendRequests(f));
    }

    useEffect(() => {
        updateFriends();
        updateFriendRequests();
    }, []);

    return <div className="page-container">

        <div className="page-header">Your Flock</div>

        <div className='flock-main page-main'>

            <div className="your-username content-box">
                Your user ID is <b>{getStravaId()}</b>, and your username is <b>{getUsername()}</b>.
            </div>
            <div className="add-friend content-box">

                <div className='find-new'>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>&nbsp;
                    Find a new Flockmate by user ID:
                </div>
                <div className='in'>
                    <Row>
                        <Col xs={9}>
                            <input type="text" name="input" className="search-box" ref={friendName} />
                        </Col>
                        <Col xs={3}>
                            <button className="search-button" onClick={() => {
                                newFriend(friendName.current.value.trim()).then((r) => {

                                    if (r) {
                                        setFriendMessage('Friend request sent!');
                                        friendName.current.value = '';
                                    }
                                    else setFriendMessage('What the flock!? That friend isn\'t flying at the moment, or you\'ve already sent them a friend request. Make sure you\'re adding them by User ID and not username.');
                                    updateFriends();
                                    updateFriendRequests();
                                }).catch(() => setFriendMessage('An error occurred. Please try again later.'));
                            }}>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </Col>
                    </Row>
                    <div className="friend-text text_">{friendMessage}</div>
                </div>
            </div>

            <hr className="section-divider" />

            <div className="content-box">
                <div className='subtitle_'>
                    Flockmate Requests
                </div>
                {friendRequests.incoming.map((e) => <div className='text_ text-updates'>
                    <div className="text_">{e.userName}</div>
                    <div className="btns">
                        <Button size="sm" color="success" onClick={() => newFriend(e.strava_id).then(() => { updateFriends(); updateFriendRequests(); })}>
                            <FontAwesomeIcon icon={faCheck} />
                        </Button> &nbsp;
                        <Button size="sm" color="danger">
                            <FontAwesomeIcon icon={faTimes} onClick={() => noFriend(e.strava_id).then(() => { updateFriends(); updateFriendRequests(); })} />
                        </Button>
                    </div>
                </div>)}
            </div>

            <hr className="section-divider" />

            <div className="content-box">
                <div className='subtitle_'>
                    Your Flockmates
                </div>

                {friends.map((e) => <div className='text_ text-flockmates'>{e.userName}<button className="remove" onClick={() => noFriend(e.strava_id).then(updateFriends)}>Remove</button></div>)}
            </div>
            <br /><br />
        </div>
    </div>

}

export default Flock;