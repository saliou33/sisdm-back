const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const SpecialiteModel = require('./models/specialiteModel');
const PatientModel = require('./models/patientModel');
const AdminModel = require('./models/adminModel');
const MedecinModel = require('./models/medecinModel');

const seed = async () => {
  //Specialite Seed
  const specialites = await SpecialiteModel.insertMany([
    {
      nom: 'Généraliste',
    },
    {
      nom: 'Neurologie',
    },
    {
      nom: 'Oncologie',
    },
    {
      nom: 'Pneumologie',
    },
    {
      nom: 'Psychatrie',
    },
  ]);

  //Users Seed
  await PatientModel.create({
    nom: 'LO',
    prenom: 'Serigne Saliou',
    email: 'serignesalioulo@esp.sn',
    password: 'passer12345',
    passwordConfirm: 'passer12345',
    dateNaissance: '1998-12-25',
    sexe: 'M',
    adresse: 'Sipress Mbao',
    groupeSanguin: 'A+',
  });

  await AdminModel.create({
    nom: 'Massamba',
    prenom: 'Bathie',
    email: 'bathiemassamba@esp.sn',
    password: 'passer12345',
    passwordConfirm: 'passer12345',
  });

  await MedecinModel.create({
    nom: 'belle',
    prenom: 'Awa',
    email: 'awabelle@esp.sn',
    password: 'passer12345',
    passwordConfirm: 'passer12345',
    specialite: [specialites[0]._id],
  });
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
    seed().then(() => {
      console.log('Seed Done');
      process.exit(1);
    });
  });
