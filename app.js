const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json())
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// ROUTES
// app.use('/api/v1/users')

app.all('*'), (res, req, next) => {
    next(AppError(`"${req.orginalUrl}" est introuvable!`, 404))
}

app.use(globalErrorHandler);

module.exports = app;