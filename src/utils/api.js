const getUsername = () => localStorage.getItem('username');

const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('code', code);
    localStorage.setItem('scope', scope);
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

/* Store? This changes every time so need to store on code*/
const getBirdname = () => {
    const names = ["Mia", "Fiona", "Sky", "Easter Egg", "Cameron", "Water Bottle", "Data Path", "That's Policy", "Bird", "Vikolas", "Vik", "Vik III"];
    return names[Math.floor(Math.random()*names.length)];
};

const getFriendUpdates = () => {
    return ["Neelu cycled the 400700 kilometres, to Canada this week!", "Fiona cycled 50 kilometres this week!", "Alex had a nap."]
}

const getFriends = () => {
    return ["DangerBirdStrikesAgain", "sbneelu", "mazalan01", "nicolechoong", "bazsi700", "fg406"]
}

const newFriend = (friend) => {
    console.log(friend);
    if (friend in ["Alice", "Bob", "Carl", "Diane", "Egg", "Fill"]) {
        //add friend as a new friend here please!!!!!!!!! but only if they exist
        return true;
    }
    else {
        return false;
    }
}

const noFriend = (friend) => {
    console.log(friend);
    //Remove friend here please :(
}

export {getUsername,
    submitLoginDetails,
    getGlobalLeaderbird,
    getFlockLeaderbird,
    getFlockRank,
    getGlobalRank,
    getFriends,
    getFriendUpdates, 
    getBirdname, 
    newFriend,
    noFriend};
