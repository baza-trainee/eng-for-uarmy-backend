const { Partner } = require("../models");
const cloudinary = require("../helpers/cloudinary");
const fs = require("fs/promises");

const getAllPartners = async(_, res) => {
    try {
        const partners = await Partner.find();
        res.status(200).json(partners)
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

const createPartner = async (req, res) => {
    const { path } = req.file;
    const fileData = await cloudinary.uploader.upload(path, { folder: "partners" });
    await fs.unlink(path);
    try {
        const newPartner = await Partner.create({partnerLogo: fileData.url});
        res.status(201).json(newPartner)
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

const deletePartner = async (req, res) => {
    const partnerId = req.params.id;
    try {
        const deletedPartner = await Partner.findByIdAndDelete(partnerId);
        if (!deletedPartner) {
        return res.status(404).json({message: 'Partner logo not deleted'})
        }
       return res.status(204).send();
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = { getAllPartners, createPartner, deletePartner };