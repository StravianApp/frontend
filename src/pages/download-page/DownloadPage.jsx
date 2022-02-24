import './download-page.scss';
import logo from '../../assets/logos/full-text-3.png';
import logo2 from '../../assets/logos/full-text-1.png';
import poweredByStravaIcon from '../../assets/powered-by-strava.svg';

const DownloadPage = () => {
    return (
        <div className="download-main">
            <div className="welcome-to-stravian">
                <div className="welcome-to">Welcome to</div>
                <div className="logo-container">
                    <img className='logo' src={logo} alt="Stravian Logo" />
                </div>
            </div>
            <div className="instructions">
                <div className="content-box">
                    <div className="subtitle_">Android(Chrome)</div>
                    <div className="text_">Tap "<b>Add to Home Screen</b>", or tap the <b>Menu</b> icon and then tap "<b>Install</b>" to install <img className="logo" src={logo2} alt="Stravian" />.</div>
                </div>
                <div className="content-box">
                    <div className="subtitle_">iOS (Safari)</div>
                    <div className="text_">Tap the <b>Share</b> icon and tap "<b>Add to Home Screen</b>" to install <img className="logo" src={logo2} alt="Stravian" />.</div>
                </div>
            </div>
            <div className="powered-by-strava"><img src={poweredByStravaIcon} alt="Powered by Strava" /></div>
        </div>
        
    );
};

export default DownloadPage;