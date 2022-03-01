

var tempUnit = "celcius";


//0 - kilometres; 1 - miles; 2 - wingspans
var disUnit = 0;


var leaderbirdVisibility = "everyone";


const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('code', code);
    localStorage.setItem('scope', scope);
    localStorage.setItem('username', 'Test');
};

const getDisUnit = () => {
    return(disUnit);
}

const getLeaderbirdVis = () => {
    return(leaderbirdVisibility);
}

const getTempUnit = () => {
    return(tempUnit);
}

const getBirdname = () => {
    const names = ["Mia", "Fiona", "Sky", "Easter Egg", "Cameron", "Water Bottle", "Data Path", "That's Policy", "Bird", "Vikolas", "Vik", "Vik III"];
    return names[Math.floor(Math.random() * names.length)];
};

const getBirdfact = () => {
    const facts = ["Greater Spotted Eagles are the largest raptors belonging to the Accipitridae family!", "Greater Spotted Eagles can weigh between 1.5 and 2.5 kg - as much as three bags of sugar!", "Greater Spotted Eagles' primary habitates are wetlands and forests!", "Greater Spotted Eagles have a wingspan of up to 180 cm - that's taller than the average UK male human!", "Greater Spotted Eagles are carnivorous, eating small mammals, snakes, lizards, fish, insects and even other birds!", "Greater Spotted eagles are endangered due to habitat loss.", "Greater Spotted Eagles face many threats every day, including illegal shooting, poaching, poisoning and electocution.", "Greater Spotted Eagles only have white spots as juveniles.", "When in gliding flight, Greater Spotted Eagles hold the feathers on their wingtips downwards.", "Greater Spotted Eagles are large, brown birds of prey!", "Greater Spotted Eagles are members of the Aquilinae family, also known as booted eagles!", "Greater Spotted Eagles make nests out of large sticks, which can be 70 to 110cm in diameter and 100cm deep!"];
    return facts[Math.floor(Math.random() * facts.length)];
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

const login = async (linkingCode) => {
    try {
        const fetchResponse = await fetch('https://server.stravian.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{ linking_code: linkingCode }])
        });
        const data = await fetchResponse.json();
        return {username: data['UserName'], jwt: data['JWT']};
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

const getUserDetails = async (loginCode) => {
    if (loginCode.length < 12) return null;
    try {
        const { username, jwt } = await login(loginCode);
        return { username, jwt };
    }
    catch (err) {
        return null;
    }
}

const birdAssigned = async (jwt) => {
    try {
        const fetchResponse = await fetch('https://server.stravian.app/hatched_status', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
        const data = await fetchResponse.json();
        console.log('hatch', data['hatchedStatus']);
        return data['hatchedStatus'];
    }
    catch (err) {
        return false;
    }
};

const assignBird = (bird) => true;

const newFriend = (friend) => {
    console.log(friend);
    if (["Alice", "Bob", "Carl", "Diane", "Egg", "Fill", "Gill", "Hill", "Ill", "Jill", "Kill", "Lill", "Mill", "Nil", "Octopus"].indexOf(friend) > -1) {
        return true;
    }
    else {
        return false;
    }
};

const noFriend = (friend) => {
    console.log(friend);
    //Remove friend here :(
        //MURDER - WE SET THE BIRDS ON THEM
};

const changeUnitsTemp = (choice) => {
    console.log(choice);
    switch (choice) {
        case 1:
            console.log("Celcius like a normal person");
            tempUnit = "Celcius";
            console.log(tempUnit);
            break;
        case 2:
            console.log("Fahrenheit");
            tempUnit = "Fahrenheit";
            console.log(tempUnit);
            break;
        case 3:
            console.log("Kelvin");
            tempUnit = "Kelvin";
            console.log(tempUnit);
            break;
    }}

const changeUnitsDis = (choice) => {
    console.log(choice);
    switch (choice) {
        case 1:
            console.log("Kilometres");
            disUnit = 0;
            console.log(disUnit);
            break;
        case 2:
            console.log("Miles");
            disUnit = 1;
            console.log(disUnit);
            break;
        case 3:
            console.log("Wingspans");
            disUnit = 2;
            console.log(disUnit);
            break;
    }}

const leaderbirdVisible = (choice) => {
    console.log(choice);
    switch (choice) {
        case 1:
            console.log("Invisible");
            leaderbirdVisibility = "invisible";
            console.log(leaderbirdVisibility);
            break;
        case 2:
            console.log("Friends");
            leaderbirdVisibility = "friends";
            console.log(leaderbirdVisibility);
            break;
        case 3:
            console.log("Everyone");
            leaderbirdVisibility = "everyone";
            console.log(leaderbirdVisibility);
            break;
    }
}

const deleteAccount = () => {
    console.log("FUCK");
}


const getGlobalLeaderbird = () => { return [{name: "Fred", bird: "Kal", dist: 2.3},
{name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0},
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
{name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0}]};
const getGlobalRank = () => {return [{rank: 52, name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0}]};
const getFlockRank = () => {return [{rank: 52, name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0}]};

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

const getLocation = () => {
    return [-0.56, 22.94]
}

const getAggDistance = () => {
    return 100
}

const getDistance = () => {
    return 10
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
    getBirdfact,
    getUserStats,
    getUserAchievements, 
    getLocation,
    getAggDistance, 
    getDistance,
    getDisUnit,
    getLeaderbirdVis,
    getTempUnit,
};
