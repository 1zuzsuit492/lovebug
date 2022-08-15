//dependencies
const express = require('express');
const cors = require('cors');

//config
const app = express();
app.use(cors());

//middleware
app.use(express.json());

//routes
app.get('/', (request, response) =>{
    response.send('Hello Motto')
});

//controllers
const goodiesController = require('./controllers/goodiesController')
app.use('/goodies', goodiesController);

module.exports = app;