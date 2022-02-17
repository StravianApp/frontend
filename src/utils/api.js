const getUsername = () => localStorage.getItem('username');
const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('username', 'Test');
};

const getGlobalLeaderbird = () => { return [{name: "Fred", bird: "Kal", dist: 2.3},
{name: "Robert", bird: "Lucky", dist: 2.0},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4},
{name: "Lucy", bird: "Lucky", dist: 1.4}]};
const getFlockLeaderbird = () => {return [{name: "Fred", bird: "Kal", dist: 2.3},
{name: "Robert", bird: "Lucky", dist: 2.0}]};
const getGlobalRank = () => {return [{rank: 2, name: "Robert", bird: "Lucky", dist: 2.0}]};
const getFlockRank = () => {return [{rank: 2, name: "Robert", bird: "Lucky", dist: 2.0}]};

export { getUsername,
    submitLoginDetails,
    getGlobalLeaderbird,
    getFlockLeaderbird,
    getFlockRank,
    getGlobalRank};