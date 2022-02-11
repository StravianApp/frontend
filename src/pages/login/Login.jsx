import './login.scss';
import ConnectWithStravaBtn from './assets/connect-with-strava.png';
import logo from '../../assets/logos/full-text-1.png';
import { useEffect } from 'react';
import { loggedIn } from '../../utils/login';
import { submitLoginDetails } from "../../utils/api";


const openLoginPopup = () => {
    console.log(1);
    const popup = window.open('/login-popup');
    const el = window.addEventListener('message', (e) => {
        const searchParams = new URLSearchParams(e.data)
        submitLoginDetails(searchParams.get('code'), searchParams.get('scope'));
        popup.close();
        window.removeEventListener('message', el);
    });
}


const Login = () => {
    useEffect(() => {
        if (loggedIn()) window.location.href = "/app";
    }, []);


    return (<div className="login-main">
        <img className="picture" alt="Eagle" src="https://picsum.photos/500/500" />
        <div className="logo-container">
            <img className='logo' src={logo} alt="Stravian Logo" />
        </div>
        <div className="connect-with-strava-btn">
            <button onClick={openLoginPopup}><img alt="Connect with Strava" src={ConnectWithStravaBtn} /></button>
        </div>
        
    </div>)
};

export default Login;