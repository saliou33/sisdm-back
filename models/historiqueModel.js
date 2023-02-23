const mongoose = require('mongoose');

const HistoriqueSchema = new mongoose.Schema({
  antedentsPersonnels: [
    {
      date: Date,
      description: {
        type: String,
        trim: true,
      },
    },
  ],
  antecedentsFamiliaux: {
    type: String,
    trim: true,
  },
  facteursRisque: [
    {
      nom: String,
      description: String,
    },
  ],
  autres: [{ nom: String, description: String }],
});

module.exports = mongoose.model('Historique', HistoriqueSchema);
