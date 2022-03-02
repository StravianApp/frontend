import { getUserDetails } from "./api";

const loggedIn = () => !!localStorage.getItem('username');
// const loggedIn = () => !localStorage.setItem('username', 'Test Username');
const logout = () => localStorage.clear();
const login = async (loginCode) => {
    // return true;
    const userDetails = await getUserDetails(loginCode);
    if (userDetails == null) return false;
    const { username, jwt } = userDetails;
    localStorage.setItem('username', username);
    localStorage.setItem('jwt', jwt);
    return true;
}
const getUsername = () => localStorage.getItem('username');

export { loggedIn, logout, login, getUsername };