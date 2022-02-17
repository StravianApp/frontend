import { getUserDetails } from "./api";

const loggedIn = () => !!localStorage.getItem('username');
const logout = () => localStorage.clear();
const login = (loginCode) => {
    const userDetails = getUserDetails(loginCode);
    if (userDetails == null) return false;
    const { username } = userDetails;
    localStorage.setItem('username', username);
    return true;
}


export { loggedIn, logout, login };