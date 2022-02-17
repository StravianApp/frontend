import './login.scss';
import ConnectWithStravaBtn from './assets/connect-with-strava.png';
import logo from '../../assets/logos/full-text-1.png';
import { useEffect, useState } from 'react';
import { loggedIn } from '../../utils/login';
import { submitLoginDetails } from "../../utils/api";


const openLoginPopup = (setCode) => {
    const popup = window.open('/login-popup');
    const el = window.addEventListener('message', (e) => {
        const searchParams = new URLSearchParams(e.data)
        submitLoginDetails(searchParams.get('code'), searchParams.get('scope'));
        setCode(searchParams.get('code'));
        popup.close();
        window.removeEventListener('message', el);
        window.location.href = "/app";
    });
}


const Login = () => {
    useEffect(() => {
        if (loggedIn()) window.location.href = "/app";
    }, []);
    const [code, setCode] = useState('');
    return (
        <div className="login-main">
            <img className="picture" alt="Eagle" src="https://picsum.photos/500/500" />
            <div className="logo-container">
                <img className='logo' src={logo} alt="Stravian Logo" />
                { code || 'not set' }
            </div>
            <div className="connect-with-strava-btn">
                <button onClick={() => openLoginPopup(setCode)}><img alt="Connect with Strava" src={ConnectWithStravaBtn} /></button>
            </div>
        </div>
    );
};

export default Login;