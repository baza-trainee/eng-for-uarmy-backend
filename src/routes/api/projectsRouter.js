const express = require("express");
const router = express.Router();
const { upload, isValidId, validateBody, authMiddleware } = require("../../middlewares");
const { projectsController } = require("../../controllers");
const { schemas } = require("../../models/");

router.get("/",
	authMiddleware,
	projectsController.getAllProjects);
router.get("/:id",
	authMiddleware,
	isValidId,
	projectsController.getProjectById);
router.put("/:id",
	authMiddleware,
	isValidId,
	validateBody(schemas.updateSchema),
	upload.single("imageUrl"),
	projectsController.updateProjectById);

module.exports = router;