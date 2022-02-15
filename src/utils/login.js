const loggedIn = () => !!localStorage.getItem('username');
const logout = () => localStorage.clear();

export { loggedIn, logout };