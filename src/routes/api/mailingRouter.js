const express = require('express');
const router = new express.Router();
const { limit } = require('../../middlewares');
const { asyncWrapper } = require('../../helpers');
const { sendData } = require('../../controllers/mailingController');

router.post('/', limit, asyncWrapper(sendData));

module.exports = router;