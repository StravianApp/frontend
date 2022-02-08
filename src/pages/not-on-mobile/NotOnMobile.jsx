import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import './not-on-mobile.scss';
import logo from '../../assets/logos/full-text-3.png';

const NotOnMobile = () => (
    <div className="notonmob-main">
        <div className="logo-container">
            <img className='logo' src={logo} alt="Stravian Logo" />
        </div>
        <div className="content">
            <h1>Stravian is only available for mobile devices.</h1>
            <FontAwesomeIcon icon={faMobileAlt} className="phone-icon" />
            <h3>Please visit this site on a smartphone to use Stravian.</h3>
        </div>
    </div>
);

export default NotOnMobile;