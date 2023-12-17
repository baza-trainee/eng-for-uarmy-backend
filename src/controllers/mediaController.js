const { Media } = require('../models');
const cloudinary = require('../helpers/cloudinary')
const path = require('path');
const fs = require('fs/promises');

// const logoDir = path.resolve("public", "mediaLogo");


const getAllMedias = async (req, res) => {
    const { lang, page = 1, limit = 6 } = req.query;
    
    try {
        const skip = (page - 1) * limit;
        const medias = lang === 'en'
            ? await Media.find({ enDesc: { $exists: true } }, '', { skip, limit })
            : await Media.find({ }, '', { skip, limit })
        return res.status(200).json(medias);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}
const getMediaById = async (req, res) => {
    const mediaId = req.params.id;
    try{
        const media = await Media.findById(mediaId);
        if (!media) {
        return res.status(404).json({message: `Media with id: ${mediaId} not found`})
        }
        return res.status(300).json(media);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}

const createMedia = async (req, res) => {
    const { path: oldPath } = req.file;
    const fileData = await cloudinary.uploader.upload(oldPath, { folder: "medias" });
    await fs.unlink(oldPath);
    // const { path: tempUpload, filename } = req.file;
    // const newPath = path.join(logoDir, filename);
    
    // Jimp.read(tempUpload, (_, filename) => {
        //     filename.resize(250, 250).write(newPath);
        // });
        
    // await fs.rename(tempUpload, newPath);
    // const logoURL = path.join("mediaLogo", filename);

    try {
        const newMedia = await Media.create({ ...req.body, logoURL: fileData.url });
        return res.status(201).json(newMedia);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}


const updatedMedia = async (req, res) => {
    const mediaId = req.params.id;
    const { path: oldPath } = req.file;
    const fileData = await cloudinary.uploader.upload(oldPath, { folder: "medias" });
    await fs.unlink(oldPath);
    try{
        const updatedMedia = await Media.findByIdAndUpdate(mediaId, { ...req.body, logoURL: fileData.url }, { new: true });
    if (!updatedMedia) {
    return res.status(404).json({message: 'Media not updated'})
    }
    return res.status(200).json(updatedMedia);
    } catch (err) {
        console.log(err);
         return res.status(500).json({error: err.message});
    }
}

const deleteMedia = async (req, res) => {
    try {
        const mediaId = req.params.id;
        const media = await Media.findByIdAndDelete(mediaId);
        if (!media) {
        return res.status(404).json({message: 'Media not deleted'})
        }
       return res.status(204).send();
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}


module.exports = {getAllMedias, getMediaById, createMedia, updatedMedia, deleteMedia}