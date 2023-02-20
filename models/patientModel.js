const mongoose = require('mongoose');
const BaseUser = require('./userModel');

const typeGroupeSanguins = ['A', 'B', 'AB', 'O'];

const typeGroupeSanguinsComplet = [];

typeGroupeSanguins.forEach(t => {
    typeGroupeSanguinsComplet.push(t + '+');
    typeGroupeSanguinsComplet.push(t + '-');
});


const PatientSchema = new mongoose.Schema({
    groupeSanguin: {
        type: String,
        enum: typeGroupeSanguinsComplet,
    }
});

const Patient = BaseUser.discriminator("Patient", PatientSchema);
module.exports = Patient;