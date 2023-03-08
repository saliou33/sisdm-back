const mongoose = require('mongoose');

const OrdonnanceSchema = new mongoose.Schema({
  examens: [String],
  prescriptions: [
    {
      medicament: [String],
      prise: String,
    },
  ],
});

module.exports = mongoose.model('Ordonnance', OrdonnanceSchema);
