const Medicament = require('./../models/medicamentModel');
const factory = require('./handlerFactory');

exports.createMedicament = factory.createOne(Medicament);
exports.getAllMedicament = factory.getAll(Medicament);
exports.getMedicament = factory.getOne(Medicament);
exports.deleteMedicament = factory.deleteOne(Medicament);
exports.getMedicament = factory.updateOne(Medicament);
