const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

dotenv.config({path : './config.env'});
const app = express();


const DB = process.env.DATABASE_LOCAL;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => console.log('DB connected'));


const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
  
