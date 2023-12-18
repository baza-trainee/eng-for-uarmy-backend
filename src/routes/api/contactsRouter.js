const express = require("express");
const router = express.Router();
const { contactController } = require('../../controllers');

router.get("/contacts", contactController.getContacts); 
router.put("/contacts", contactController.updateContacts);


module.exports = router;