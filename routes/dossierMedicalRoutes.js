const { Router } = require('express');
const dossierMedicalController = require('./../controllers/dossierMedicalController');

const router = Router();

router
  .route('/')
  .get(dossierMedicalController.getAllDossierMedical)
  .post(dossierMedicalController.createDossierMedical);

router
  .route('/:id')
  .get(dossierMedicalController.getDossierMedical)
  .delete(dossierMedicalController.deleteDossierMedical);

module.exports = router;
