const { Router } = require('express');
const specialiteController = require('./../controllers/specialiteController');

const router = Router();

router
  .route('/')
  .get(specialiteController.getAllSpecialite)
  .post(specialiteController.createSpecialite);

router
  .route('/:id')
  .get(specialiteController.getSpecialite)
  .delete(specialiteController.deleteSpecialite);

module.exports = router;
