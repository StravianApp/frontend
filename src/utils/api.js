const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('code', code);
    localStorage.setItem('scope', scope);
    localStorage.setItem('username', 'Test');
};

/* Store? This changes every time so need to store on code*/
const getBirdname = () => {
    const names = ["Mia", "Fiona", "Sky", "Easter Egg", "Cameron", "Water Bottle", "Data Path", "That's Policy", "Bird", "Vikolas", "Vik", "Vik III"];
    return names[Math.floor(Math.random() * names.length)];
};

const getFriendUpdates = () => {
    return ["Neelu cycled the 400700 kilometres, to Canada this week!", "Fiona cycled 50 kilometres this week!", "Alex had a nap."]
};

const getFriends = () => {
    return ["DangerBirdStrikesAgain", "sbneelu", "mazalan01", "nicolechoong", "bazsi700", "fg406"]
};


const exchangeStravaCodeForLoginCode = async (code) => {
    try {
        const fetchResponse = await fetch('https://server.stravian.app/exchange-strava-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });
        const data = await fetchResponse.json();
        console.log(data);
        return data['linking_code'];
    }
    catch (err) {
        throw err;
    }
};

const getUserDetails = (loginCode) => (loginCode.length === 12 ? {
    username: 'Test Username'
} : null);

const birdAssigned = () => false;

const assignBird = (bird) => true;

const newFriend = (friend) => {
    console.log(friend);
    if (["Alice", "Bob", "Carl", "Diane", "Egg", "Fill"].indexOf(friend) > -1) {
        //add friend as a new friend here please!!!!!!!!! but only if they exist
        return true;
    }
    else {
        return false;
    }
};

const noFriend = (friend) => {
    console.log(friend);
    //Remove friend here please :(
};

const changeUnitsTemp = (newUnit) => {
    console.log(newUnit);
}

const changeUnitsDis = (newUnit) => {
    console.log(newUnit);
}

const leaderbirdVisible = (choice) => {
    console.log(choice);
}

const deleteAccount = () => {
    console.log("FUCK");
}


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

const getUserStats = () => {return {
    week: 5,
    month: 10,
    year: 20,
    allTime: 20
}}

const getUserAchievements = () => {
    return [{name: "Nothing!", summary: "You have never achieved anything!"},
    {name: "Cracking Start!", summary: "You hatched your bird!"}]
}

export {
    birdAssigned,
    submitLoginDetails,
    getGlobalLeaderbird,
    getFlockLeaderbird,
    getFlockRank,
    getGlobalRank,
    getFriends,
    getBirdname,
    exchangeStravaCodeForLoginCode,
    getUserDetails,
    getFriendUpdates,
    newFriend,
    noFriend,
    changeUnitsTemp,
    changeUnitsDis,
    leaderbirdVisible,
    deleteAccount,
    assignBird,
    getUserStats,
    getUserAchievements };
