const mongoose = require('mongoose');

const SpecialiteMedecinSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'Une specialite doit avoir un nom'],
  },
});

module.exports = mongoose.model('SpecialiteMedecin', SpecialiteMedecinSchema);
