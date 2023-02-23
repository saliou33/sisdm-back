const mongoose = require('mongoose');

const RencontreSchema = new mongoose.Schema({
  practicien: {
    type: mongoose.Schema.ObjectId,
    ref: 'Medecin',
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
  },
  typeContact: {
    type: String,
    enum: ['chat', 'voice', 'video'],
  },
  commentaire: String,
  ordonnances: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Ordonnance',
    },
  ],
});

module.exports = mongoose.model('Rencontre', RencontreSchema);
