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
mongoose.set('strictQuery', true);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB CONNNECTED..'));

const port = process.env.PORT || 3000;

// SERVER LISTENING ON PORT
app.listen(port, () => {
    console.log(`APP RUNNING ON PORT ${port}...`);
});
  
