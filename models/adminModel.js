const mongoose = require('mongoose');
const BaseUser = require('./userModel');

const AdminSchema = new mongoose.Schema({
  niveau: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
});

module.exports = BaseUser.discriminator('Medecin', AdminSchema);
