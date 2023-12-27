const { model, Schema } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const projectSchema = new Schema({
	titleEn: {
		type: String,
		required: [true, "The title is required"],
	},
	titleUa: {
		type: String,
		required: [true, "The title is required"],
	},
	textEn: {
		type: String,
		required: [true, "The text is required"],
	},
	textUa: {
		type: String,
		required: [true, "The text is required"],
	},
	imageUrl: {
		type: String,
		required: [true, "The photo is required"],
	},
	linkUrl: {
		type: String,
	},
}, { versionKey: false, timestamps: true });

projectSchema.post("save", handleMongooseError);

const Project = model("projects", projectSchema);

const updateSchema = Joi.object({
	titleEn: Joi.string()
		.min(3)
		.max(50)
		.required(),
	titleUa: Joi.string()
		.min(3)
		.max(50)
		.required(),
	textEn: Joi.string()
		.min(3)
		.max(255)
		.required(),
	textUa: Joi.string()
		.min(3)
		.max(255)
		.required(),
	imageUrl: Joi.string()
		.required(),
	linkUrl: Joi.string(),
});

const schemas = { updateSchema };

module.exports = { Project, schemas };