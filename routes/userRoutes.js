const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get('/logged', authController.isLoggedIn, authController.logged);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);

module.exports = router;
