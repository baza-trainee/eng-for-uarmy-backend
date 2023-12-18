const express = require("express");
const router = express.Router();
const { partnerController } = require("../../controllers");
const { upload } = require("../../middlewares")

router.get("/partners", partnerController.getAllPartners);
router.post("/partners", upload.single("partnerLogo"), partnerController.createPartner); // input {partnerLogo: file}
router.delete("/partners/:id", partnerController.deletePartner);

module.exports = router;