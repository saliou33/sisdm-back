const mongoose = require('mongoose');

const MedicamentSchema = new mongoose.Schema({
  designation: {
    type: String,
    min: [
      4,
      'La désignation de medicament doit comporter au moins 4 caratéres',
    ],
    max: [
      128,
      'La désignation de medicament doit comporter au max 4 caratéres',
    ],
  },
});

module.exports = mongoose.model('Medicament', MedicamentSchema);
