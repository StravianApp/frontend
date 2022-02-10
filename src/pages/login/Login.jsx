import './login.scss';
import ConnectWithStravaBtn from './assets/connect-with-strava.png';
import logo from '../../assets/logos/full-text-1.png';
import { stravaApi } from '../../Config';
import { useEffect } from 'react';
import { loggedIn } from '../../utils/login';

const { clientId, scope, redirectUri } = stravaApi;

const stravaLink = `https://www.strava.com/oauth/authorize?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=${scope}`;


const Login = () => {
    useEffect(() => {
        if (loggedIn()) window.location.href = "/app";
    }, []);


    return (<div className="login-main">
        <img className="picture" alt="Eagle" src="https://picsum.photos/500/500" />
        <div className="logo-container">
            <img className='logo' src={logo} alt="Stravian Logo" />
        </div>
        <a className="connect-with-strava-btn" href={stravaLink}><img alt="Connect with Strava" src={ConnectWithStravaBtn} /></a>
    </div>)
};

export default Login;