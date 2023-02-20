const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const patientRouter = require('./routes/patientRoutes'); 
const app = express();

//- GLOBAL MIDDLEWARES
// Set Security Http Headers
app.use(helmet());

// Dev Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// limit request from client
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
});
app.use('/api', limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSql Query Injection
app.use(mongoSanitize());

// Data sanitization agains xss
app.use(xss());

// Test
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

//- ROUTES
app.get('/', (req, res) => {
    return res.json(
        {
            server: "SISDM API BACKEND",
            version: "1.0",
        }
    );
});
app.use('/api/v1/patients', patientRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (res, req, next) => {
    next(new AppError(`"${req.originalUrl}" est introuvable!`, 404))
})

app.use(globalErrorHandler);

module.exports = app;