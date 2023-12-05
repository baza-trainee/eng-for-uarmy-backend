const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const handleMongooseError = require("../helpers/handleMongooseError");

const adminSchema = new mongoose.Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },    
    token: {
        type: String,
        default: null,
    },
},
    { versionKey: false, timestamps: true },
);

adminSchema.pre('save', async function () {
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    };
});

adminSchema.post("save", handleMongooseError);

const Admin = mongoose.model('admin', adminSchema);

module.exports = {
    Admin
}