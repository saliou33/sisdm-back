const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// App Router
const userRouter = require('./routes/userRoutes');
const patientRouter = require('./routes/patientRoutes');
const adminRouter = require('./routes/adminRoutes');
const medecinRouter = require('./routes/medecinRoutes');
const dossierMedicalRouter = require('./routes/dossierMedicalRoutes');
const historiqueRouter = require('./routes/historiqueRoutes');
const rencontreRouter = require('./routes/rencontreRoutes');
const specialiteRouter = require('./routes/specialiteRoutes');
const ordonnanceRouter = require('./routes/ordonnanceRoutes');
const medicamentRouter = require('./routes/medecinRoutes');

// express app
const app = express();

//- GLOBAL MIDDLEWARES
// Set Security Http Headers
app.use(helmet());

// Implements CORS
app.use(cors());

// Dev Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// rate limiter for client
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
});

app.use('/api', limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Cookie parser
app.use(cookieParser());

// Data sanitization against NoSql Query Injection
app.use(mongoSanitize());

// Data sanitization agains xss
app.use(xss());

// Test
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//- APP ROUTES
const BASE = '/api/v1';
// GET /
app.get('/', (req, res) => {
  return res.json({
    server: 'SISDM API BACKEND',
    version: '1.0',
  });
});

app.use(`${BASE}/users`, userRouter);
app.use(`${BASE}/admins`, adminRouter);
app.use(`${BASE}/patients`, patientRouter);
app.use(`${BASE}/medecins`, medecinRouter);

app.use(`${BASE}/dms`, dossierMedicalRouter);
app.use(`${BASE}/ordonnances`, ordonnanceRouter);
app.use(`${BASE}/specialites`, specialiteRouter);
app.use(`${BASE}/rencontres`, rencontreRouter);
app.use(`${BASE}/historiques`, historiqueRouter);
app.use(`${BASE}/medicament`, medicamentRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`"${req.originalUrl}" est introuvable!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
