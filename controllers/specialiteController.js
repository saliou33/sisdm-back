const Specialite = require('../models/specialiteModel');
const factory = require('./handlerFactory');

exports.createSpecialite = factory.createOne(Specialite);
exports.getAllSpecialite = factory.getAll(Specialite);
exports.getSpecialite = factory.getOne(Specialite);
exports.deleteSpecialite = factory.deleteOne(Specialite);
exports.getSpecialite = factory.updateOne(Specialite);
