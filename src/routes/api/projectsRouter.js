const express = require("express");
const router = express.Router();
const { upload, isValidId, validateBody, authMiddleware } = require("../../middlewares");
const { projectsController } = require("../../controllers");
const { schemas } = require("../../models/");

router.use(authMiddleware);

router.get("/projects", projectsController.getAllProjects);
router.get("/projects/:id",
	isValidId,
	projectsController.getProjectById);
router.put("/projects/:id",
	isValidId,
	validateBody(schemas.updateSchema),
	upload.single("imageUrl"),
	projectsController.updateProjectById);

module.exports = router;