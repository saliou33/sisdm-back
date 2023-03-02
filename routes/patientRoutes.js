const { Router } = require('express');
const patientController = require('./../controllers/patientController');
const authController = require('./../controllers/authController');

const router = Router();

router.use(authController.protect);

router
  .route('/')
  .get(patientController.getAllPatient)
  .post(patientController.createPatient);

router
  .route('/:id')
  .get(patientController.getPatient)
  .delete(patientController.deletePatient);

module.exports = router;
