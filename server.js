const express = require('express');
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 80;
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

const backendUri = 'https://server.stravian.app';

app.get('/webhook', async (req, res) => {
    try {
        const resp = await axios.get(`${backendUri}/webhook`, req.query);
        const respJson = resp.data;
        res.json(respJson);
    }
    catch (e) {
        res.sendStatus(403);
    }
});

app.post('/webhook', async (req, res) => {
    try {
        console.log('WEBHOOK!!!');
        const resp = await axios.post(`${backendUri}/webhook`, req.body);
        console.log(resp);
        res.status(resp.status).send(resp.data);
    }
    catch (e) {}
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);