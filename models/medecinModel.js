const mongoose = require('mongoose');
const BaseUser = require('./userModel');

const MedecinSchema = new mongoose.Schema({
  specialite: {
    type: String,
    required: [true, 'Veuillez donner votre spécialié'],
  },
});

module.exports = BaseUser.discriminator('Medecin', MedecinSchema);
