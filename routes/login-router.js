const express = require('express');
const {login} = require('./../controllers/login-controller.js');

const router = express.Router();

router.post('/', login);

module.exports = router;