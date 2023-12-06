const express = require('express');
const router = new express.Router();
const { asyncWrapper } = require('../../helpers/asyncWrapper');
const { signup, login, } = require('../../controllers/authController');
// const { authMiddleware, userPostValidation } = require('../../middlewares');

router.post('/signup', asyncWrapper(signup));
router.post('/login', asyncWrapper(login));
// router.get('/logout', authMiddleware, asyncWrapper(ctrlLogout));

module.exports = router;