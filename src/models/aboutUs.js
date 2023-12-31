const { model, Schema } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const AboutUsSchema = new Schema({
    imgURL: {
        type: String,
        required: [true, "The image URL is required"]
    },
    // imgURLmob: {
    //     type: String,
    //     required: [true, "The image URL is required"]
    // },
    paragraph1: {
        type: String,
    },
    paragraph2: {
        type: String,
    },
    paragraph3: {
        type: String,
    },
    paragraph1En: {
        type: String,
    },
    paragraph2En: {
        type: String,
    },
    paragraph3En: {
        type: String,
    },
}, { versionKey: false, timestamps: true })

AboutUsSchema.post("save", handleMongooseError)

const AboutUs = model("AboutUs", AboutUsSchema);

module.exports = AboutUs;