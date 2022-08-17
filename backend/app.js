const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('./database/mongoose');

const List = require('./database/models/list');
const Task = require('./database/models/task');

app.use(express.json());

/**
 * CORS - Cross Origin Request Security
 * localhost:3000 - backend api
 * localhost:4200 - frontend
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'frontend/src')));

/**
 * List: Create, Update, ReadOne, ReadAll, Delete
 * Task: Create, Update, ReadOne, ReadAll, Delete
 * 
 * GET -> get data
 * POST -> save
 * PUT PATCH -> update
 * DELETE -> delete
 */
app.get('/lists', (req, res) => {
    List.find({})
        .then(lists => res.send(lists))
        .catch((error) => console.log(error));
});

app.post('/lists', (req, res) => {
    (new List({ 'title': req.body.title }))
        .save()
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

app.get('/lists/:listId', (req, res) => { /** localhost:3000/lists/62c5adce297c3dcbc5d2784d */
    List.find({ _id: req.params.listId })
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
}); 

app.patch('/lists/:listId', (req, res) => {
    List.findOneAndUpdate({ '_id': req.params.listId }, { $set: req.body })
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

app.delete('/lists/:listId', (req, res) => {
    List.findByIdAndDelete(req.params.listId)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
})

app.listen(3000, () => console.log("server listening on port 3000"));