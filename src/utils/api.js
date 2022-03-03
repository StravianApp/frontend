import { backendUri } from "../Config";

const xhr = async (path, { jwt, body, headers }, method) => {
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
    const fetchResponse = await fetch(`${backendUri}${path}`, request);
    return fetchResponse;
};

const getFullResp = async (path, { jwt, body, headers }) => {
    const resp = await xhr(path, { jwt, body, headers }, 'GET');
    return resp;
};

const postFullResp = async (path, { jwt, body, headers }) => {
    const resp = await xhr(path, { jwt, body, headers }, 'POST');
    return resp;
};

const get = async (path, { jwt, body, headers }) => {
    const resp = await getFullResp(path, { jwt, body, headers });
    const data = await resp.json();
    return data;
};

const post = async (path, { jwt, body, headers }) => {
    const resp = await postFullResp(path, { jwt, body, headers });
    const data = await resp.json();
    return data;
};

const submitLoginDetails = (code, scope) => {
    console.log(code, scope);
    localStorage.setItem('code', code);
    localStorage.setItem('scope', scope);
    localStorage.setItem('username', 'Test');
};

const getDisUnit = async () => {
    const resp = await get('/get_dist_unit', { jwt: true});
    const data = resp['preferred_unit_type'];
    switch (data) {
        case 0:
            return "kilometres";
        case 1:
            return "miles";
        case 2: 
            return "wingspans";
    }
};

const getLeaderbirdVis = async () => {
    const resp = await get('/get_leaderbird_visibility', { jwt: true});
    const data = resp["visibility_status"];
    switch (data) {
        case 0:
            return "invisible";
        case 1:
            return "friends";
        case 2: 
            return "everyone";
    }
};

// const getTempUnit = () => {
//     return (tempUnit);
// };

const getBirdname = async () => {
    if (!localStorage.getItem('birdName')) {
        const data = await get('/get_bird_name', { jwt: true });
        localStorage.setItem('birdName', data['birdName']);
    }
    return localStorage.getItem('birdName');
};

//STAY ON FRONTEND  
const getBirdfact = () => {
    const facts = ["Greater Spotted Eagles are the largest raptors belonging to the Accipitridae family!", "Greater Spotted Eagles can weigh between 1.5 and 2.5 kg - as much as three bags of sugar!", "Greater Spotted Eagles' primary habitates are wetlands and forests!", "Greater Spotted Eagles have a wingspan of up to 180 cm - that's taller than the average UK male human!", "Greater Spotted Eagles are carnivorous, eating small mammals, snakes, lizards, fish, insects and even other birds!", "Greater Spotted eagles are endangered due to habitat loss.", "Greater Spotted Eagles face many threats every day, including illegal shooting, poaching, poisoning and electocution.", "Greater Spotted Eagles only have white spots as juveniles.", "When in gliding flight, Greater Spotted Eagles hold the feathers on their wingtips downwards.", "Greater Spotted Eagles are large, brown birds of prey!", "Greater Spotted Eagles are members of the Aquilinae family, also known as booted eagles!", "Greater Spotted Eagles make nests out of large sticks, which can be 70 to 110cm in diameter and 100cm deep!"];
    return facts[Math.floor(Math.random() * facts.length)];
};

const getFriendRequests = async () => {
    const resp = await get('/friend_updates', { jwt: true });
    return {incoming: resp['incomingRequests'], outgoing: resp['outgoingRequests']};
};

const getFriends = async () => {
    const resp = await get('/friends', { jwt: true });
    return resp['friends'];
};

const exchangeStravaCodeForLoginCode = async (code) => {
    const data = await post('/exchange-strava-code', { body: { code } });
    return data['linking_code'];
};

const login = async (linkingCode) => {
    const data = await post('/login', { body: [{ linking_code: linkingCode }] });
    return { username: data['userName'], jwt: data['JWT'], stravaId: data['stravaId'] };
};

const getUserDetails = async (loginCode) => {
    if (loginCode.length < 12) return null;
    try {
        const { username, jwt, stravaId } = await login(loginCode);
        return { username, jwt, stravaId };
    }
    catch (err) {
        return null;
    }
};

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

const newFriend = async (friend) => {
    const resp = await postFullResp('/add_friend', { jwt: true, body: [{strava_id: friend}] });
    return resp.ok;
};

const noFriend = async (friend) => {
    const resp = await postFullResp('/remove_friend', { jwt: true, body: [{strava_id: friend}] });
    return resp.ok;
};

// const changeUnitsTemp = (choice) => {
//     console.log(choice);
//     switch (choice) {
//         case 1:
//             console.log("Celcius like a normal person");
//             tempUnit = "Celcius";
//             console.log(tempUnit);
//             break;
//         case 2:
//             console.log("Fahrenheit");
//             tempUnit = "Fahrenheit";
//             console.log(tempUnit);
//             break;
//         case 3:
//             console.log("Kelvin");
//             tempUnit = "Kelvin";
//             console.log(tempUnit);
//             break;
//         default: break;
//     }
// };

const changeUnitsDis = async (choice) => {
    let resp;
    switch (choice) {
        case 0:
            resp = await postFullResp('/set_dist_unit', { jwt: true, body: [{"preferred_unit_type": 0}]});
            console.log("kilometres");
            break;
        case 1:
            resp = await postFullResp('/set_dist_unit', { jwt: true, body: [{"preferred_unit_type": 1}]});
            console.log("miles");
            break;
        case 2:
            resp = await postFullResp('/set_dist_unit', { jwt: true,  body: [{"preferred_unit_type": 2}]});
            console.log("wingspans");
            break;
        default: break;
    }
};

const leaderbirdVisible = async (choice) => {
    let resp;
    switch (choice) {
        case 0:
            resp = await postFullResp('/set_leaderbird_visibility', { jwt: true, body: [{"visibility_status": 0}]});
            console.log("Invisible");
            break;
        case 1:
            resp = await postFullResp('/set_leaderbird_visibility', { jwt: true,  body: [{"visibility_status": 1}]});
            console.log("Friends");
            break;
        case 2:
            resp = await postFullResp('/set_leaderbird_visibility', { jwt: true,  body: [{"visibility_status": 2}]});
            console.log("Everyone");
            break;
        default: break;
    }
};

const deleteAccount = async () => {
    console.log("FUCK");
};


const getGlobalLeaderbird = async () => {
    const data = await get('/get_global_leaderbird', {jwt: true});
    return data["leaderbird"];
};

const getFlockLeaderbird = async () => {
    const data = await get('/get_flock_leaderbird', {jwt: true});
    return data["leaderbird"];
};

const getGlobalRank = async () => {
    console.log("JUST DO SOMETHING YOU SON OF A BITCH");
    const data = await get('/get_global_rank', {jwt: true});
    console.log("Merci fucking beacoup");
    return data;
};

const getFlockRank = async () => {
    const data = await get('/get_flock_rank', {jwt: true});
    console.log("hi");
    return data["rank"];
};

const getUserStats = async () => {
    //const data = await get('/get_user_stats', {jwt: true});
    //return data;
    return {
        week: 5,
        month: 10,
        year: 20,
        allTime: 20
    }
};

const getUserAchievements = async () => {
    const data = await get('/get_user_achievements', {jwt: true});
    return data["achievements"];

    //return [{ name: "Nothing!", summary: "You have never achieved anything!" },
    //{ name: "Cracking Start!", summary: "You hatched your bird!" }]
};

const getLocation = async () => {
    const data = await get('/get_bird_location', {jwt: true});
    console.log([data['lat'], data['long']]);
    return([data['lat'], data['long']]);
    
    //return [-0.56, 22.94]
};


const getAggDistance = () => {
    return 100
};

const getDistance = () => {
    return 10
};

const getEventLeaderbird = () => {
    //const data = await get('/get_event_leaderbird', {jwt: true});
    //return data;
    return []
};

const getEventRank = () => {
    //const data = await get('/get_event_rank', {jwt: true});
    //return data;
    return []
};



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
    getFriendRequests,
    newFriend,
    noFriend,
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
    getEventLeaderbird,
    getEventRank
};