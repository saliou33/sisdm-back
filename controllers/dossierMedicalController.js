const DossierMedical = require('./../models/dossierMedicalModel');
const factory = require('./handlerFactory');

exports.createDossierMedical = factory.createOne(DossierMedical);
exports.getAllDossierMedical = factory.getAll(DossierMedical);
exports.getDossierMedical = factory.getOne(DossierMedical);
exports.deleteDossierMedical = factory.deleteOne(DossierMedical);
exports.getDossierMedical = factory.updateOne(DossierMedical);
