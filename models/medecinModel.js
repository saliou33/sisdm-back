const mongoose = require('mongoose');
const BaseUser = require('./userModel');

const MedecinSchema = new mongoose.Schema({
  specialites: [
    {
      type: mongoose.Schema.specialite,
      ref: 'SpecialiteMedecin',
    },
  ],
});

module.exports = BaseUser.discriminator('Medecin', MedecinSchema);
