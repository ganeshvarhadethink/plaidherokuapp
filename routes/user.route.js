const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/getbalance', userController.getBalance);
router.get('/transfer', userController.transfer);

module.exports = router;