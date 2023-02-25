const { Router } = require('express');
const rencontreController = require('./../controllers/rencontreController');

const router = Router();

router
  .route('/')
  .get(rencontreController.getAllRencontre)
  .post(rencontreController.createRencontre);

router
  .route('/:id')
  .get(rencontreController.getRencontre)
  .delete(rencontreController.deleteRencontre);

module.exports = router;
