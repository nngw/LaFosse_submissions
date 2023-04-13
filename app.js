//External dependencies
const express = require('express');
const cors = require('cors'); 

//Internal dependencies 
const cars = require('./cars.json');

const app = express();
app.use(cors())
app.use(express.json())

//Welcome page
app.get('/', (req,res) =>{
    res.send("Welcome to My Cars API")
})

//Display all car information
app.get('/cars', (req,res) =>{
    res.send(cars)
})


module.exports = app;