const express = require("express");
const router = express.Router();
const { upload } = require("../../middlewares");
const { aboutUsControllers } = require('../../controllers');

router.get("/aboutUs", aboutUsControllers.getDataAboutUs)

router.post("/aboutUs", upload.single("imgURL"), aboutUsControllers.createAboutUsData)

router.put("/aboutUs/:id", upload.single("imgURL"), aboutUsControllers.updateDataAboutUs)


module.exports = router;