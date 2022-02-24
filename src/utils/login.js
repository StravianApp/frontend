import { getUserDetails } from "./api";

const loggedIn = () => !!localStorage.getItem('username');
const logout = () => localStorage.clear();
const login = async (loginCode) => {
    localStorage.setItem('username', 'test');
    return true;
    const userDetails = await getUserDetails(loginCode);
    if (userDetails == null) return false;
    const { username, jwt } = userDetails;
    localStorage.setItem('jwt', jwt);
    return true;
}


export { loggedIn, logout, login };