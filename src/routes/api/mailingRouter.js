const express = require('express');
const router = new express.Router();
const { asyncWrapper } = require('../../helpers/asyncWrapper');
const { sendData } = require('../../controllers/mailingController');

router.post('/', asyncWrapper(sendData));

module.exports = router;