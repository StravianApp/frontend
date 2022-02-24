import './download-page.scss';
import logo from '../../assets/logos/full-text-3.png';
import poweredByStravaIcon from './assets/poweredbystrava.png';

const DownloadPage = () => {
    return (
        <div className="download-main-container">
            <div className="download-main">
                <div className="welcome-to-stravian">
                    <div className="welcome-to">Welcome to</div>
                    <div className="logo-container">
                        <img className='logo' src={logo} alt="Stravian Logo" />
                    </div>
                </div>
                <br /><br /><br />
                <div className="instructions">Tap "<b>Add to Home Screen</b>", or tap the Menu icon and then tap "<b>Install</b>" to install <img className='logo' src={logo} alt="Stravian" />.</div>
            </div>
            <div className="powered-by-strava"><img src={poweredByStravaIcon} alt="Powered by Strava" /></div>
        </div>
        
    );
};

export default DownloadPage;