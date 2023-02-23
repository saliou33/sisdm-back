const mongoose = require('mongoose');
const BaseUser = require('./userModel');

const typeGroupeSanguins = ['A', 'B', 'AB', 'O'];

const typeGroupeSanguinsComplet = [];

typeGroupeSanguins.forEach((t) => {
  typeGroupeSanguinsComplet.push(t + '+');
  typeGroupeSanguinsComplet.push(t + '-');
});

const PatientSchema = new mongoose.Schema({
  sexe: {
    type: String,
    enum: ['M', 'F'],
    required: [true, 'Veuillez donner le genre'],
  },
  dateNaissance: {
    type: Date,
    required: [true, 'Veuillez donner la date de naissance'],
  },
  adresse: {
    type: String,
    required: [true, "Veuillez donner l'adresse"],
  },
  profession: String,
  personneSecondaire: {
    nom: String,
    tel: String,
  },
  groupeSanguin: {
    type: String,
    enum: typeGroupeSanguinsComplet,
  },
});

module.exports = BaseUser.discriminator('Patient', PatientSchema);
