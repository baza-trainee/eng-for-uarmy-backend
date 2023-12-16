const { Media } = require('../models');

const getAllMedias = async (req, res) => {
    try {
        const medias = await Media.find();
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
        return res.status(200).json(media);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}
const createMedia = async (req, res) => {
    const { description, logo } = req.body;
    try {
        const newMedia = await Media.create({ description, logo });
        return res.status(201).json(newMedia);
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}

const updatedMedia = async (req, res) => {
    try{
    const mediaId = req.params.id;
    const {description, logoURL} = req.body;
    const updatedMedia = await Media.findByIdAndUpdate(mediaId, { description, logoURL }, { new: true });
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


modules.export = {getAllMedias, getMediaById, createMedia, updatedMedia, deleteMedia}