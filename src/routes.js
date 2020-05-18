const express = require('express');
const developerController = require('./controller/developerController');

const routes = express.Router();

// Register a developer
routes.post('/devs', developerController.createDeveloper);

/*
// GET -  Receive json with the received name
routes.get('/', (req, res) => { 
    return res.json({ username: req.query.name }); 
});
*/

/*
// POST - Send a dev
routes.post('/devs', (req, res) => {

    console.log(req.body);

    return res.json({ ok: true });

});
*/

// So that our server can know the routes
module.exports = routes;