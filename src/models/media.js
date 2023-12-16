const  { model, Schema } = require('mongoose');
const handleMongooseError = require("../helpers/handleMongooseError");

const mediaSchema = new Schema({
    description: {
        type: String,
        required: [true, "The description is required"]
    },
    logoURL: {
        type: String,
        required: [true, "The logo is required"]
    }
}, { versionKey: false, timestamps: true })

mediaSchema.post("save", handleMongooseError);

const Media = model('Medias', mediaSchema);

module.exports = Media;