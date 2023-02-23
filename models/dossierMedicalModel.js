const mongoose = require('mongoose');

const DossierMedicalSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: ['Patient'],
  },
  rencontres: [
    {
      type: mongoose.Schema.ObjectId,
      ref: ['Rencontre'],
    },
  ],
  historique: {
    type: mongoose.Schema.ObjectId,
    ref: ['Historique'],
  },
  decisions: {
    type: String,
    trim: true,
  },
  documents: [String],
});

module.exports = mongoose.model('DossierMedical', DossierMedicalSchema);
