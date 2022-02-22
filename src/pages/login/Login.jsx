import './login.scss';
import ConnectWithStravaBtn from './assets/connect-with-strava.png';
import logo from '../../assets/logos/full-text-1.png';
import { useEffect, useRef, useState } from 'react';
import { loggedIn, login } from '../../utils/login';
import { stravaApi } from '../../Config';
import { birdAssigned } from '../../utils/api';

const { clientId, scope, redirectUri } = stravaApi;

const stravaLink = `https://www.strava.com/oauth/mobile/authorize?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=${scope}`;


const Login = () => {
    const codeEl = useRef(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        if (loggedIn()) window.location.href = "/app";
    }, []);
    return (
        <div className="login-main">
            <img className="picture" alt="Eagle" src="https://picsum.photos/500/500" />
            <div className="logo-container">
                <img className='logo' src={logo} alt="Stravian Logo" />
            </div>
            <div className="login-steps">
                <div className="step step1">
                    <button onClick={() => window.open(stravaLink)}><img alt="Connect with Strava" src={ConnectWithStravaBtn} /></button>
                </div>
                <div className="step step2">
                    <input className={error ? 'invalid-code' : ''} ref={codeEl} type="text" placeholder="Enter login code..." onChange={() => {
                        if (login(codeEl.current.value)) {
                            if (birdAssigned()) window.location.href = '/app';
                            else window.location.href = '/app/hatch';
                        }
                        else setError(true);
                    }} />
                </div>
            </div>
        </div>
    );
};

export default Login;