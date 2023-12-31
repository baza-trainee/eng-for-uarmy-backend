const express = require("express");
const router = express.Router();
const { upload } = require("../../middlewares");
const { mediaControllers } = require('../../controllers');

router.get("/medias", mediaControllers.getAllMedias); // "/medias?lang=X&page=X&limit=X"
router.get("/medias/:id", mediaControllers.getMediaById); //"/medias/12345"
router.post("/medias", upload.single("logoImg"), mediaControllers.createMedia); //input: {  ukDesc, enDesc, logoImg, mediaURL } => output: { _id, ukDesc, enDesc, logoURL, mediaURL }}
router.put("/medias/:id", upload.single("logoImg"), mediaControllers.updatedMedia);//"api/medias/12345 input: {  ukDesc, enDesc, logoImg, mediaURL } => output: {  ukDesc, enDesc, logoURL, mediaURL }}
router.delete("/medias/:id", mediaControllers.deleteMedia);//"api/medias/12345"



module.exports = router;