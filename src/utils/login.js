import { getUserDetails } from "./api";

const loggedIn = () => !!localStorage.getItem('username');
const logout = () => localStorage.clear();
const login = async (loginCode) => {
    const userDetails = await getUserDetails(loginCode);
    if (userDetails == null) return false;
    const { username, jwt, stravaId } = userDetails;
    localStorage.setItem('username', username);
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('stravaId', stravaId);
    return true;
}

const getUsername = () => localStorage.getItem('username');
const getStravaId = () => localStorage.getItem('stravaId');

export { loggedIn, logout, login, getUsername, getStravaId };