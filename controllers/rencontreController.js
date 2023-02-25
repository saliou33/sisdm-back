const Rencontre = require('./../models/rencontreModel');
const factory = require('./handlerFactory');

exports.createRencontre = factory.createOne(Rencontre);
exports.getAllRencontre = factory.getAll(Rencontre);
exports.getRencontre = factory.getOne(Rencontre);
exports.deleteRencontre = factory.deleteOne(Rencontre);
exports.getRencontre = factory.updateOne(Rencontre);
