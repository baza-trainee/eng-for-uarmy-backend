const { model, Schema } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const contactsSchema = new Schema({
    number: {
        type: String,
        required: [true, "The number is required"]
    },
    email: {
        type: String,
        required: [true, "The email is required"]
    },
    facebookURL: {
        type: String,
        required: [true, "The facebook URL is required"]
    },
    instagramURL: {
        type: String,
        required: [true, "The instagram URL is required"]
    },
    telegramURL: {
        type: String,
        required: [true, "The telegram URL is required"]
    },
    youtubeURL: {
        type: String,
        required: [true, "The youtube URL is required"]
    }
})

contactsSchema.post("save", handleMongooseError);

const Contacts = model("Contacts", contactsSchema);

module.exports = Contacts;