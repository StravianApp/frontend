const getUsername = () => localStorage.getItem('username');
const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('username', 'Test');
};

const getGlobalLeaderbird = () => {};
const getFlockLeaderbird = () => {/*Send user data*/};
const getGlobalRank = () => {/* Get your rank */};
const getFlockRank = () => {};

export { getUsername, submitLoginDetails };