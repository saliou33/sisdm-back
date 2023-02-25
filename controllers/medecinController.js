const Medecin = require('./../models/medecinModel');
const factory = require('./handlerFactory');

exports.createMedecin = factory.createOne(Medecin);
exports.getAllMedecin = factory.getAll(Medecin);
exports.getMedecin = factory.getOne(Medecin);
exports.deleteMedecin = factory.deleteOne(Medecin);
exports.getMedecin = factory.updateOne(Medecin);
