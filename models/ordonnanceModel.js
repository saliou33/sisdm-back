const mongoose = require('mongoose');

const OrdonnanceSchema = new mongoose.Schema({
  examens: [String],
  prescriptions: [
    {
      nom: {
        type: String,
        required: [true, 'Une prescription doit avoir un nom'],
      },
      prise: String,
    },
  ],
});

module.exports = mongoose.model('Ordonnance', OrdonnanceSchema);
