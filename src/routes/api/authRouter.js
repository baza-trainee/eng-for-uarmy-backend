const express = require('express');
const router = new express.Router();
const { asyncWrapper } = require('../../helpers/asyncWrapper');
const { signup, login, logout, current} = require('../../controllers/authController');
const { authMiddleware, userPostValidation } = require('../../middlewares');

router.post('/signup', asyncWrapper(signup));
router.post('/login', asyncWrapper(login));
router.get('/logout', authMiddleware, asyncWrapper(logout));
router.get('/current', authMiddleware, asyncWrapper(current));

module.exports = router;