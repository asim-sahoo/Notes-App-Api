const express = require('express');
const app = express();

const Note = require('./models/Note');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://asimsahoo:asimsahoo1@cluster0.bsktaze.mongodb.net/notesdb").then(function() {
    app.get('/', function(req, res) {
        const response = { message: 'Server is running' };
        res.json(response);
    });

    const noteRoutes = require('./routes/Note');
    app.use('/notes', noteRoutes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log('Server is running on port 5000');
});