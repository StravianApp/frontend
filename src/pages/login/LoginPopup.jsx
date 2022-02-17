import { stravaApi } from '../../Config';

const LoginPopup = () => {
    const { clientId, scope, redirectUri } = stravaApi;

    const stravaLink = `https://www.strava.com/oauth/mobile/authorize?client_id=${clientId}` +
        `&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=${scope}`;
    
    window.location.href = stravaLink;
};

export default LoginPopup;