const Historique = require('./../models/historiqueModel');
const factory = require('./handlerFactory');

exports.createHistorique = factory.createOne(Historique);
exports.getAllHistorique = factory.getAll(Historique);
exports.getHistorique = factory.getOne(Historique);
exports.deleteHistorique = factory.deleteOne(Historique);
exports.getHistorique = factory.updateOne(Historique);
