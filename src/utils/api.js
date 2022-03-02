var tempUnit = "celcius";
var disUnit = "kilometres";
var leaderbirdVisibility = "everyone";

const xhr = async (uri, { jwt, body, headers }, method) => {
    let reqHeaders = {
        'Content-Type': 'application/json'
    };
    if (headers) reqHeaders = { ...reqHeaders, ...headers };
    if (jwt) (reqHeaders['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`);
    const request = {
        headers: reqHeaders
    };
    if (body) request.body = JSON.stringify(body);
    if (method !== 'GET') request.method = method;
    console.log(request);
    await fetch(`https://server.stravian.app${uri}`, request);
    console.log(1);
    const fetchResponse = await fetch(`https://server.stravian.app${uri}`, request);
    return fetchResponse;
}

const getFullResp = async (uri, { jwt, body, headers }) => {
    const resp = await xhr(uri, { jwt, body, headers }, 'GET');
    return resp;
}

const postFullResp = async (uri, { jwt, body, headers }) => {
    const resp = await xhr(uri, { jwt, body, headers }, 'POST');
    return resp;
}

const get = async (uri, { jwt, body, headers }) => {
    const resp = await getFullResp(uri, { jwt, body, headers });
    const data = await resp.json();
    return data;
}

const post = async (uri, { jwt, body, headers }) => {
    const resp = await postFullResp(uri, { jwt, body, headers });
    const data = await resp.json();
    return data;
}

const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('code', code);
    localStorage.setItem('scope', scope);
    localStorage.setItem('username', 'Test');
};

const getDisUnit = () => {
    return (disUnit);
}

const getLeaderbirdVis = () => {
    return (leaderbirdVisibility);
}

const getTempUnit = () => {
    return (tempUnit);
}

const getBirdname = async () => {
    if (!localStorage.getItem('birdName')) {
        const data = await get('/get_bird_name', { jwt: true });
        localStorage.setItem('birdName', data['birdName']);
    }
    return localStorage.getItem('birdName');
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
    const data = await post('/exchange-strava-code', { body: { code } });
    return data['linking_code'];
};

const login = async (linkingCode) => {
    const data = await post('/login', { body: [{ linking_code: linkingCode }] });
    return { username: data['userName'], jwt: data['JWT'] };
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

const birdAssigned = async () => {
    try {
        const data = await get('/hatched_status', { jwt: true });
        return data['hatchedStatus'];
    }
    catch (err) {
        return false;
    }
};

const hatchEgg = async () => {
    const data = await postFullResp('/hatch_egg', { jwt: true });
    return data.ok;
};

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
        default: break;
    }
}

const changeUnitsDis = (choice) => {
    console.log(choice);
    switch (choice) {
        case 1:
            console.log("Kilometres");
            disUnit = "kilometres";
            console.log(disUnit);
            break;
        case 2:
            console.log("Miles");
            disUnit = "miles";
            console.log(disUnit);
            break;
        case 3:
            console.log("Wingspans");
            disUnit = "wingspans";
            console.log(disUnit);
            break;
        default: break;
    }
}

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
        default: break;
    }
}

const deleteAccount = () => {
    console.log("FUCK");
}


const getGlobalLeaderbird = () => {
    //const data = await get('/get_global_leaderbird', {jwt: true});
    //return data;

    return [{ name: "Fred", bird: "Kal", dist: 2.3 },
    { name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 },
    { name: "Lucy", bird: "Lucky", dist: 1.4 }]
};
const getFlockLeaderbird = () => {
    //const data = await get('/get_flock_leaderbird', {jwt: true});
    //return data;
    return [{ name: "Fred", bird: "Kal", dist: 2.3 },
    { name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0 }]
};
const getGlobalRank = () => {
    //const data = await get('/get_global_rank', {jwt: true});
    //return data;
    return [{ rank: 2, name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0 }] };
const getFlockRank = () => {
    //const data = await get('/get_flock_rank', {jwt: true});
    //return data;
    return [{ rank: 2, name: "DangerBirdStrikesAgain", bird: "Lucky", dist: 2.0 }] };

const getUserStats = () => {
    //const data = await get('/get_user_stats', {jwt: true});
    //return data;

    return {
        week: 5,
        month: 10,
        year: 20,
        allTime: 20
    }
}

const getUserAchievements = () => {
    //const data = await get('/get_user_achievements', {jwt: true});
    //return data;

    return [{ name: "Nothing!", summary: "You have never achieved anything!" },
    { name: "Cracking Start!", summary: "You hatched your bird!" }]
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

const getEventLeaderbird = () => {
    //const data = await get('/get_event_leaderbird', {jwt: true});
    //return data;
    return []};
const getEventRank = () => {
    //const data = await get('/get_event_rank', {jwt: true});
    //return data;
    return []};

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
    hatchEgg,
    getBirdfact,
    getUserStats,
    getUserAchievements,
    getLocation,
    getAggDistance,
    getDistance,
    getDisUnit,
    getLeaderbirdVis,
    getTempUnit,
    getEventLeaderbird,
    getEventRank
};