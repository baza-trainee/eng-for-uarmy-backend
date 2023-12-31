module.exports = class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static BadRequest(message = "Bad Request") {
        return new HttpError(400, message);
    }

    static ValidatoinError(message = "Not valid") {
        return new HttpError(400, message);
    }

    static NotAuthorizedError(message = "Not authorized") {
        return new HttpError(401, message);
    }

    static ForbiddenError() {
        return new HttpError(403, "Forbidden");
    }

    static NotFoundError(message = "Not Found") {
        return new HttpError(404, message);
    }
    
    static ConflictError(message = "Conflict") {
        return new HttpError(409, message);
    }

    static LimitError(message = "Too Many Requests") {
        return new HttpError(429, message);
    }
};