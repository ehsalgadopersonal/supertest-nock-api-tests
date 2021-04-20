const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 9000;

app.get('/', async (req, res) => {
    const response = await fetch('https://www.boredapi.com/api/activity');
    const json = await response.json();
    res.json(json);
})
app.listen(port);
module.exports = app;