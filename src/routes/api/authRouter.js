const express = require('express');
const router = new express.Router();
const { asyncWrapper } = require('../../helpers/asyncWrapper');
const { authCtrl} = require('../../controllers');
const { authMiddleware, userPostValidation } = require('../../middlewares');

router.post('/signup', asyncWrapper(authCtrl.signup));
router.post('/login', asyncWrapper(authCtrl.login));
router.get('/logout', authMiddleware, asyncWrapper(authCtrl.logout));
router.get('/current', authMiddleware, asyncWrapper(authCtrl.current));
router.post('/resset-password', asyncWrapper(authCtrl.ressetPassword));

module.exports = router;