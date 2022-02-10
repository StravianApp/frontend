const loggedIn = () => !!localStorage.getItem('username');
const logout = () => localStorage.removeItem('username');

export { loggedIn, logout };