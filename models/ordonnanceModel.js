const mongoose = require('mongoose');

const OrdonnanceSchema = new mongoose.Schema({
  examens: [String],
  prescriptions: [
    {
      medicament: {
        type: mongoose.Schema.ObjectId,
        ref: 'Medicament',
      },
      prise: String,
    },
  ],
});

module.exports = mongoose.model('Ordonnance', OrdonnanceSchema);
