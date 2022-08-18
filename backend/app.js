const express = require('express');
const app = express();
const path = require('path');
const dbconnect = require('./dbconnect');

const mongoose = require('./database/mongoose');

const List = require('./database/models/list');
const Task = require('./database/models/task');
const TechReq = require('./database/models/techrequest');

const port = process.env.PORT || 3000;

app.use(express.json());

dbconnect.connectToServer(function(err) {
    if(err) {
        console.error(err);
        process.exit();
    }
})

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
app.use(express.static(path.join(__dirname, 'frontend/dist')));

/**
 * List: Create, Update, ReadOne, ReadAll, Delete
 * Task: Create, Update, ReadOne, ReadAll, Delete
 * 
 * GET -> get data
 * POST -> save
 * PUT PATCH -> update
 * DELETE -> delete
 */
app.post('/newReq', (req, res) => {
    (new TechReq({ 'orgType': req.body.orgType }))
        .save()
        .then(techrequests => res.send(techrequests))
        .then(console.log("techrequest sent"))
        .catch((error) => console.log(error));
});

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
});

app.get("*", function(req, res) {
    res.sendFile(path.join(dirname, "../frontend/src/", "index.html"));
});

app.listen(port, () => console.log("server listening on port " + port));