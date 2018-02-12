// Bringing in Express package.
const express   = require('express');
// Initializing our Express application and saving it in the const app.
const app       = express();
const mongoose  = require('mongoose');
// Importing database config
const config    = require('./config/database');
const path      = require ('path');

// Fixes config issue with mongoose.
mongoose.Promise = global.Promise;
// Connecting to database.
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to databse: ', err);
    } else {
        console.log('Connected to database: ' + config.db);
    }
});

// Providing access to the dist directory.
app.use(express.static(__dirname + '/client/dist/'));

/* Anytime user sends a request we are going to respond with something.
   In this case the home page.
   By using the '*' no matter what route our users go to the will get that message.
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

// Telling the server to listen on the port 8080.
app.listen(8080, () => {
    console.log('Listening on port 8080');
});

