var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
    request({
        uri: 'http://localhost:8000/api/data',
        // qs: {
        //     api_key: '123456',
        //     query: 'World of Warcraft: Legion'
        // },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body)
            }
        }
    });
});

module.exports = router;