const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const SpecialiteModel = require('./models/specialiteModel');
const PatientModel = require('./models/patientModel');
const AdminModel = require('./models/adminModel');
const MedecinModel = require('./models/medecinModel');

const seed = async () => {
  //Users Seed
  await PatientModel.create({
    nom: 'LO',
    prenom: 'Serigne Saliou',
    email: 'serignesalioulo@esp.sn',
    password: 'passer12345',
    passwordConfirm: 'passer12345',
    groupeSanguin: 'A+',
  });

  await AdminModel.create({
    nom: 'Massamba',
    prenom: 'Bathie',
    email: 'bathiemassamba@esp.sn',
    password: 'passer12345',
    passwordConfirm: 'passer12345',
  });

  await medecin;
};

const DB = process.env.DATABASE_LOCAL;
mongoose.set('strictQuery', true);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB CONNNECTED..');
  });
