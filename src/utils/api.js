const getUsername = () => localStorage.getItem('username');
const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('username', 'Test');
};

export { getUsername, submitLoginDetails };