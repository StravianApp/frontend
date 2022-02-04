import './offline.scss';
import logo from '../../assets/logos/full-text-3.png';
import noWifiIcon from './assets/no-wifi.png';

const Offline = () => (
    <div className="main">
        <div className="logo-container">
            <img className='logo' src={logo} alt="Stravian Logo" />
        </div>
        <div className="main-section">
            <div className="error-caption">What the flock?!</div>
            <div className="no-wifi-icon">
                <img src={noWifiIcon} alt="No Internet connection" />
            </div>
            <div className="error-msg">An error has occurred. Please check your Internet connection.</div>
        </div>
    </div>
);

export default Offline;