const axios = require('axios');
var express = require('express');
var app = express();

app.get('/', async function (req, res) {
  res.send(await main());
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});

var main = async ()  => {
    try {
        const response = await axios.get('https://swapi.dev/api/people/3/');
        return response.data;
    } catch (error) {
        return error;
    }
}
