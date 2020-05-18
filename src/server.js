const express = require('express'); // Give me access to express library 

const routes = require('./routes');

const server = express(); // Call the function express to create a new server 

server.use(express.json()) // Informs the server that the requests are made in JSON 

server.use(routes); // Use routes (imported)

server.listen(3333); // Set the port that the server will use