const authCtrl = require('./authController')
const mediaControllers = require('./mediaController');
const aboutUsControllers = require('./aboutUsController');
const contactController = require('./contactController');
const partnerController = require('./partnerController');
const projectsController = require('./projectsController');

module.exports = { authCtrl, mediaControllers, contactController, partnerController, projectsController, aboutUsControllers };
