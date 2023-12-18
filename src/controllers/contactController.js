const { Contacts } = require('../models');

const getContacts = async (_, res) => {
    try {
        const contacts = await Contacts.find();
        res.status(200).json(contacts)
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
}

const updateContacts = async (req, res) => {
    const contactsId = '658063059412ca3ed56557dc';
    try {
        const updatedContacts = await Contacts.findByIdAndUpdate(contactsId, req.body);
        res.status(200).json(updatedContacts)
        
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = { getContacts, updateContacts };