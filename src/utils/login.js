import { getUserDetails } from "./api";

const loggedIn = () => true;
const logout = () => localStorage.clear();
const login = async (loginCode) => {
    const userDetails = await getUserDetails(loginCode);
    if (userDetails == null) return false;
    const { username, jwt } = userDetails;
    localStorage.setItem('username', username);
    localStorage.setItem('jwt', jwt);
    return true;
}

export { loggedIn, logout, login };