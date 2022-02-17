import './login.scss';
import ConnectWithStravaBtn from './assets/connect-with-strava.png';
import logo from '../../assets/logos/full-text-1.png';
import { useEffect, useRef, useState } from 'react';
import { loggedIn, login } from '../../utils/login';
import { stravaApi } from '../../Config';

const { clientId, scope, redirectUri } = stravaApi;

const stravaLink = `https://www.strava.com/oauth/mobile/authorize?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=${scope}`;


const Login = () => {
    const codeEl = useRef(null);
    const [error, setError] = useState('');
    useEffect(() => {
        if (loggedIn()) window.location.href = "/app";
    }, []);
    return (
        <div className="login-main">
            <img className="picture" alt="Eagle" src="https://picsum.photos/500/500" />
            <div className="logo-container">
                <img className='logo' src={logo} alt="Stravian Logo" />
            </div>
            <div className="connect-with-strava-btn">
                <button onClick={() => window.open(stravaLink)}><img alt="Connect with Strava" src={ConnectWithStravaBtn} /></button>
                <div className="got-a-login-code-caption">
                    Got a login code? Enter it here:
                </div>
                <br />
                <input ref={codeEl} type="text" />
                <button className="submitBtn" onClick={() => {
                    if (login(codeEl.current.value)) window.location.href = '/app';
                    else setError('NO!');
                }}>Submit</button>
                { error && <div style={{color: 'red', fontSize: '3em', fontWeight: 700}}>{error}</div>}
            </div>
            
        </div>
    );
};

export default Login;