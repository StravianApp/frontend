const getUsername = () => localStorage.getItem('username');
const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('username', 'Test');
};

const getBirdname = () => {
    const names = Array("Mia", "Fiona", "Sky", "Easter Egg", "Cameron", "Water Bottle", "Data Path", "That's Policy", "Bird")
    return names[Math.floor(Math.random()*names.length)];
}
export { getUsername, submitLoginDetails, getBirdname };