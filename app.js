//External dependencies
const express = require('express');
const cors = require('cors'); 

//Internal dependencies 
const cars = require('./cars.json');

const app = express();
app.use(cors());
app.use(express.json());

//Welcome page
app.get('/', (req,res) =>{
    res.send("Welcome to My Cars API");
})

//Display all car information
app.get('/cars', (req,res) =>{
    res.send(cars);
})

//Display cars by car name
app.get('/cars/:name',(req,res) => {
    const carName = req.params.name.toLowerCase();

    const car = cars.find(car => car.Name.toLowerCase() === carName);

    if (car !== undefined){
        res.send(car);
    } else {
        res.status(404).send("Sorry, that car is not is our system.");
    }
})

//Add new car details
app.post('/cars/', (req,res) => {
    //Get an array of existing IDs and find largest ID number
    const ids = cars.map(car => car.id);
    let maxID = Math.max(...ids);

    //Check car name is already in the system. 
    //If car is not in the system add it, else display error message.
    const car = cars.find(car => car.Name.toLowerCase() === req.body.Name.toLowerCase());
    
    if (car === undefined){
        maxID += 1
        
        const newCar = req.body
        newCar.id = maxID

        cars.push(newCar)

        res.status(201).send(newCar)
    } else {
        res.status(409).send("ERROR: That car already exists in the system.")
    }

    res.send("sending")
})


module.exports = app;