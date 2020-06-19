const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://posts_service:4000/events', event);
    axios.post('http://comments_service:4001/events', event);
    axios.post('http://query_service:4002/events', event);

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log("Event bus on 4005");
}) 