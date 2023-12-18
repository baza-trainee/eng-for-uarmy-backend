const { model, Schema } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const partnerSchema = new Schema({
    partnerLogo: {
        type: String,
        require: [true, "The partner logo is required"]
    }
}, { versionKey: false, timestamps: true })

partnerSchema.post("save", handleMongooseError);

const Partner = model("partners", partnerSchema);

module.exports = Partner;
