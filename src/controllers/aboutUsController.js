const { AboutUs } = require("../models");
const cloudinary = require('../helpers/cloudinary')
const fs = require('fs/promises');


const getDataAboutUs = async (req, res) => {
    try{
    const data = await AboutUs.find();
        res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

const createAboutUsData = async (req, res) => {
    const { path: oldPath } = req.file;
    const fileData = await cloudinary.uploader.upload(oldPath, { folder: "aboutUs" });
    await fs.unlink(oldPath);
    try{
        const newData = await AboutUs.create({ ...req.body, imgURL: fileData.url });
        return res.status(201).json(newData);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

const updateDataAboutUs = async (req, res) => {
    const dataId = req.params.id;
    const { path: oldPath } = req.file;
    const fileData = await cloudinary.uploader.upload(oldPath, { folder: "aboutUs" });
    await fs.unlink(oldPath);
    try{
        const updatedData = await AboutUs.findByIdAndUpdate(dataId, { ...req.body, imgURL: fileData.url }, { new: true });
        if (!updatedData) {
        return res.status(404).json({message: 'Data about us not updated'})
        }
        return res.status(200).json(updatedData);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {getDataAboutUs, updateDataAboutUs, createAboutUsData}