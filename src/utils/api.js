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

const getDisUnit = async () => {
    const resp = await get('/get_dist_unit', { jwt: true });
    const data = resp['preferred_unit_type'];
    switch (data) {
        case 0:
            return "km";
        case 1:
            return "mi";
        case 2:
            return "ws";
        default: break;
    }
};

const getDisUnit2 = async () => {
    const resp = await get('/get_dist_unit', { jwt: true });
    const data = resp['preferred_unit_type'];
    switch (data) {
        case 0:
            return "kilometres";
        case 1:
            return "miles";
        case 2:
            return "wingspans";
        default: break;
    }
};

const getLeaderbirdVis = async () => {
    const resp = await get('/get_leaderbird_visibility', { jwt: true });
    const data = resp["visibility_status"];
    switch (data) {
        case 0:
            return "invisible";
        case 1:
            return "friends";
        case 2:
            return "everyone";
        default: break;
    }
};

const getBirdname = async () => {
    if (!localStorage.getItem('birdName')) {
        const data = await get('/get_bird_name', { jwt: true });
        localStorage.setItem('birdName', data['birdName']);
    }
    return localStorage.getItem('birdName');
};

const getFriendRequests = async () => {
    const resp = await get('/friend_updates', { jwt: true });
    return { incoming: resp['incomingRequests'], outgoing: resp['outgoingRequests'] };
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
    const resp = await postFullResp('/add_friend', { jwt: true, body: [{ strava_id: friend }] });
    return resp.ok;
};

const noFriend = async (friend) => {
    const resp = await postFullResp('/remove_friend', { jwt: true, body: [{ strava_id: friend }] });
    return resp.ok;
};

const changeUnitsDis = async (choice) => {
    switch (choice) {
        case 0:
            await postFullResp('/set_dist_unit', { jwt: true, body: [{ "preferred_unit_type": 0 }] });
            break;
        case 1:
            await postFullResp('/set_dist_unit', { jwt: true, body: [{ "preferred_unit_type": 1 }] });
            break;
        case 2:
            await postFullResp('/set_dist_unit', { jwt: true, body: [{ "preferred_unit_type": 2 }] });
            break;
        default: break;
    }
};

const leaderbirdVisible = async (choice) => {
    switch (choice) {
        case 0:
            await postFullResp('/set_leaderbird_visibility', { jwt: true, body: [{ "visibility_status": 0 }] });
            break;
        case 1:
            await postFullResp('/set_leaderbird_visibility', { jwt: true, body: [{ "visibility_status": 1 }] });
            break;
        case 2:
            await postFullResp('/set_leaderbird_visibility', { jwt: true, body: [{ "visibility_status": 2 }] });
            break;
        default: break;
    }
};

const deleteAccount = async () => {
    await postFullResp('/delete_user', { jwt: true });
    return;
};


const getGlobalLeaderbird = async () => {
    const data = await get('/get_global_leaderbird', { jwt: true });
    return [data["leaderbird"], data["global_rank"]];
};

const getFlockLeaderbird = async () => {
    const data = await get('/get_flock_leaderbird', { jwt: true });
    return [data["leaderbird"], data["flock_rank"]];
};

const getUserStats = async () => {
    const data = await get('/get_user_stats', { jwt: true });
    return data;
};

const getUserAchievements = async () => {
    const data = await get('/get_user_achievements', { jwt: true });
    return data["achievements"];
};

const getLocation = async () => {
    const data = await get('/get_bird_location', { jwt: true });
    return ([data['lat'], data['long']]);
};


const getAggDistance = async () => {
    const data = await get('/get_bird_distances', { jwt: true });
    return data["lifetime"];
};

const getDistance = async () => {
    const data = await get('/get_bird_distances', { jwt: true });
    return data["week"];
};

const getEventLeaderbird = () => {
    return [];
    // Can expand to implement event leaderbirds
};



export {
    birdAssigned,
    getGlobalLeaderbird,
    getFlockLeaderbird,
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
    getUserStats,
    getUserAchievements,
    getLocation,
    getAggDistance,
    getDistance,
    getDisUnit,
    getLeaderbirdVis,
    getEventLeaderbird,
    getDisUnit2,
};