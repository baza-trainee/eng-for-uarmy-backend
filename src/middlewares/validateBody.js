const { HttpError } = require("../helpers");

const validateBody = schema => {
	const func = (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) {
			throw new HttpError(400, error.message);
			// next(HttpError(400, error.message));
		}
		next();
	}
	return func;
}

module.exports = validateBody;