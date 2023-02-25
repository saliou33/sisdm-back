const Patient = require('./../models/patientModel');
const factory = require('./handlerFactory');

exports.createPatient = factory.createOne(Patient);
exports.getAllPatient = factory.getAll(Patient);
exports.getPatient = factory.getOne(Patient);
exports.deletePatient = factory.deleteOne(Patient);
exports.getPatient = factory.updateOne(Patient);