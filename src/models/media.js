const  { model, Schema } = require('mongoose');
const handleMongooseError = require("../helpers/handleMongooseError");

const mediaSchema = new Schema({
    ukDesc: {
        type: String,
    },
    enDesc: {
        type: String,
    },
    logoURL: {
        type: String,
        required: [true, "The logo URL is required"]
    },
    mediaURL: {
        type: String,
        required: [true, "The media URL is required"]
    }
}, { versionKey: false, timestamps: true })

mediaSchema.post("save", handleMongooseError);

const Media = model('Medias', mediaSchema);

module.exports = Media;