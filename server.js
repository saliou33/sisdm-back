const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! Fall back...');
    console.log(err.name, err.message);
    process.exit()
})

dotenv.config({path : './config.env'});
const app = require('./app');

const DB = process.env.DATABASE_LOCAL;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connected'));


const port = process.env.PORT || 3000;


// SERVER LISTENING ON PORT
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
  
