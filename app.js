'use strict';

const mysql = require('mysql');
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
let responseString = "Hello here is the number of times I have been seen: ";

app.get('/', (req, res) => {
    const mysqlHost = HOST;
    const mysqlPort = '3306';
    const mysqlUser = 'root';
    const mysqlPassword = 'password';
    const mysqlDB = 'webapp';

    const connectionOptions = {
        host: mysqlHost,
        port: mysqlPort,
        user: mysqlUser,
        password: mysqlPassword,
        database: mysqlDB
    };

    console.log('MySQL connection config :');
    console.log(connectionOptions)

    const connection = mysql.createConnection(connectionOptions);

    connection.connect();

    connection.query('CREATE TABLE IF NOT EXISTS webUse(\'id\' int(10) NOT NUL auto_increment')
    connection.query('INSERT INTO webUse (id)')
    connection.query('SELECT id FROM webUse', function (error, results, fields){
        if (error) throw error;
        responseString += String(results.keys.max())
        console.log(responseString);
        res.status(200).send(responseString);
    });

    connection.end()
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);