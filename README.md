# Stravian Frontend

## Config file

The config file is at `src/config.js`. This file is expected to contain a dictionary with keys `development` and `production`, with each one containing config items it requires. For this version of the app, this is Strava API details and the backend URI. To add more, add them as keys to both `development` and `production` objects in `config.json` and export them from `src/Config.js`. The correct version (`dev` or `prod`) will automatically be selected from the `NODE_ENV` environment variable.

**NOTE:** Also set the backend URI in `server.js`.

## Installing dependencies

Run `npm install` to install dependencies.

## Building and running

### Development

For development, run `npm run dev` to serve the app on localhost:3000. This has hot-reloading. Also, while Stravian is only available for mobile devices and shows a message on desktops on production, it is viewable on desktop on development.

### Production

For production, run `npm run build` to build the app and then `npm start` to serve the app on the port specified in the `PORT` environment variable if one exists, and port 80 otherwise.

## Key files

### `App.jsx`

All routing for the frontend is done in `App.jsx`. It has a `LoginRequired` component for routes that require login. It also has appropriate redirects set up to only allow app routes in PWA mode, and non-app routes in the browser.

### `Layout.jsx`

This file contains the main layout for the app pages (specifically navigation). Don't use this component for routes that shouldn't have navigation.

### `src/api.js`

This file contains methods to communicate with the backend. Use the following four functions:

`get(path, { jwt, body, headers })`: This sends a `GET` request to the specified `path` (within the backend URI setup in `config.json`). `jwt` is a boolean which sends the user's JWT if set to `true` (for routes which require authentication). `body` is the request body. `headers` contains the request headers. Any or all of `jwt`, `body`, and `headers` can be `null`. This function parses the response body from the backend as JSON and returns the JSON.

`getFullResp(path, { jwt, body, headers })`: Same as `get()` but returns the entire response rather than just the parsed JSON body.

`post(path, { jwt, body, headers })` and `postFullResp(path, { jwt, body, headers })`: `POST` request analogs to `get()` and `getFullResp()`.

### `server.js`

This simply serves `index.html` to all routes as routing is done within JavaScript. However, there is one exception to this: it serves `/webhook` itself as this is required with the Strava API, and just bounces these requests to the backend server.

### `src/pages/...`

All page components are in the `src/pages` directory.
