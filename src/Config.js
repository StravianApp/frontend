import config_file from './config.json';

const config = config_file[process.env.NODE_ENV];

const { stravaApi, backendUri } = config;

export { stravaApi, backendUri };