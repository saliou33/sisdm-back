const { Router } = require('express');
const historiqueController = require('./../controllers/historiqueController');

const router = Router();

router
  .route('/')
  .get(historiqueController.getAllHistorique)
  .post(historiqueController.createHistorique);

router
  .route('/:id')
  .get(historiqueController.getHistorique)
  .delete(historiqueController.deleteHistorique);

module.exports = router;
