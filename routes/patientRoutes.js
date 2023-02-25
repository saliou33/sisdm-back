const { Router } = require('express');
const patientController = require('./../controllers/patientController');

const router = Router();

router
  .route('/')
  .get(patientController.getAllPatient)
  .post(patientController.createPatient);

router
  .route('/:id')
  .get(patientController.getPatient)
  .delete(patientController.deletePatient);

module.exports = router;
