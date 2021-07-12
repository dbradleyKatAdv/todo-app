const express = require('express');

const signupController = require('../controllers/signup-controller.js');

const router = express.Router();

router.post('/', signupController.createUser);
router.get('/', () => {
    console.log("this")
})

module.exports = router