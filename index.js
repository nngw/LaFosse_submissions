const app = require('./app.js');

const port = 3000;

const cars = require('./cars.json');

console.log(port)
app.listen(port, () => {
    console.log(`App is connected on port ${port}`);
  })