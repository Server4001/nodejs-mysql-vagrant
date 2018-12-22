'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();
const port = 8080;

mongoose.connect('mongodb://localhost/my_database');

const Comment = mongoose.model('Comment', new Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now }
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/create-comment', (req, res) => {
    const instance = new Comment();
    instance.name = 'Foo';
    instance.age = 22;
    instance.bio = 'bar';

    instance.save(function (err) {
        if (err) {
            res.send('There was an error: ' + JSON.stringify(err));
        } else {
            res.send('Created a comment');
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
