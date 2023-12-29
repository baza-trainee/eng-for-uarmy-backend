const jwt = require('jsonwebtoken');
const { Admin } = require('../models/admin');
const HttpError = require("../helpers/HttpError");

const authMiddleware = async (req, res, next) => {
    try {
        const { authorization = '' } = req.headers;
        const [bearer, token] = authorization.split(' ');

        if (bearer !== "Bearer" || !token) {
            next(new HttpError(401, "Not authorized"));
        }

        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(tokenData._id, '-password -__v');

        if (!admin || admin.token !== token) {
            next(new HttpError(401, "Not authorized"));
        }
        
        req.admin = admin;
        console.log("req.admin", req.admin);
        next();
    } catch (err) {
        next(new HttpError(401, "Not authorized"));
    };
};

module.exports = authMiddleware;