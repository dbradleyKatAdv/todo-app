const express = require('express');
const router = express.Router();
const authorizationController = require('../controllers/authorization-controller.js');

router.post('/signup', authorizationController.signup);
router.post('/signin', authorizationController.signin);


module.exports = router;