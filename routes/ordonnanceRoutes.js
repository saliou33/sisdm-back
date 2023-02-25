const { Router } = require('express');
const ordonnanceController = require('./../controllers/ordonnanceController');

const router = Router();

router
  .route('/')
  .get(ordonnanceController.getAllOrdonnance)
  .post(ordonnanceController.createOrdonnance);

router
  .route('/:id')
  .get(ordonnanceController.getOrdonnance)
  .delete(ordonnanceController.deleteOrdonnance);

module.exports = router;
