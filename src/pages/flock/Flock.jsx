import './flock.scss';
import glass from './assets/magglass.png'
import { getFriendUpdates, getFriends } from '../../utils/api';
const friendUpdates = getFriendUpdates();
const friends = getFriends();


const Flock = () => (
    <div className='flock-main'>
        <div className='title'>
            Your Flock
        </div>
        <div className='find-new'>
            <img className="magglass" src={glass} alt="Magnifying glass" />
            Find a new Flockmate
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
)

export default Flock;