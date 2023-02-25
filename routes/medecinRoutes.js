const { Router } = require('express');
const medecinController = require('./../controllers/medecinController');

const router = Router();

router
  .route('/')
  .get(medecinController.getAllMedecin)
  .post(medecinController.createMedecin);

router
  .route('/:id')
  .get(medecinController.getMedecin)
  .delete(medecinController.deleteMedecin);

module.exports = router;
