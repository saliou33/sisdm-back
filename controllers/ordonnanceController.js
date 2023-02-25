const Ordonnance = require('./../models/ordonnanceModel');
const factory = require('./handlerFactory');

exports.createOrdonnance = factory.createOne(Ordonnance);
exports.getAllOrdonnance = factory.getAll(Ordonnance);
exports.getOrdonnance = factory.getOne(Ordonnance);
exports.deleteOrdonnance = factory.deleteOne(Ordonnance);
exports.getOrdonnance = factory.updateOne(Ordonnance);
