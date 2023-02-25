const { Router } = require('express');
const adminController = require('./../controllers/adminController');

const router = Router();

router
  .route('/')
  .get(adminController.getAllAdmin)
  .post(adminController.createAdmin);

router
  .route('/:id')
  .get(adminController.getAdmin)
  .delete(adminController.deleteAdmin);

module.exports = router;
