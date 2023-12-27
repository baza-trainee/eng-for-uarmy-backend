const { Project } = require("../models");
const fs = require("fs/promises");
const { cloudinary, asyncWrapper, HttpError } = require("../helpers");

const getAllProjects = async (_, res) => {
	const result = await Project.find();

	res.status(200).json(result);
};

const getProjectById = async (req, res) => {
	const { id } = req.params;

	const result = await Project.findById(id);
	if (!result) {
		throw new HttpError(404, `Project with id: ${id} is not found`);
	}

	res.status(200).json(result);
};

const updateProjectById = async (req, res) => {
	const { id } = req.params;
	const { path } = req.file;

	const fileData = await cloudinary.uploader.upload(path, { folder: "projects" });

	await fs.unlink(path);

	const result = await Project.findByIdAndUpdate(id, { ...req.body, imageUrl: fileData.url }, { new: true });
	if (!result) {
		throw new HttpError(404, "Project is not updated");
	}

	res.status(200).json(result);
};

module.exports = {
	getAllProjects: asyncWrapper(getAllProjects), getProjectById: asyncWrapper(getProjectById), updateProjectById: asyncWrapper(updateProjectById)
};