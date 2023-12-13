const Card = require("../models/card");

const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

const cardController = {
  createCard: async (req, res) => {
    try {
      const {
        imageUrl,
        textUk,
        textEn,
        nameUk,
        nameEn,
        designationUk,
        designationEn,
      } = req.body;
      const savedCard = await Card.create({
        imageUrl,
        textUk,
        textEn,
        nameUk,
        nameEn,
        designationUk,
        designationEn,
      });
      res.status(201).json(savedCard);
    } catch (error) {
      handleError(res, error);
    }
  },

  getAllCards: async (req, res) => {
    try {
      const cards = await Card.find();
      res.status(200).json(cards);
    } catch (error) {
      handleError(res, error);
    }
  },

  getCardById: async (req, res) => {
    try {
      const card = await Card.findById(req.params._id);
      if (!card) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.status(200).json(card);
    } catch (error) {
      handleError(res, error);
    }
  },

  updateCard: async (req, res) => {
    try {
      console.log(req.params._id);
      const {
        imageUrl,
        textUk,
        textEn,
        nameUk,
        nameEn,
        designationUk,
        designationEn,
      } = req.body;
      const updatedCard = await Card.findByIdAndUpdate(
        req.params._id,
        {
          imageUrl,
          textUk,
          textEn,
          nameUk,
          nameEn,
          designationUk,
          designationEn,
        },
        { new: true }
      );
      if (!updatedCard) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.status(200).json(updatedCard);
    } catch (error) {
      handleError(res, error);
    }
  },

  deleteCard: async (req, res) => {
    try {
      console.log(req.params._id);
      const deletedCard = await Card.findByIdAndDelete(req.params._id);
      if (!deletedCard) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.status(204).end();
    } catch (error) {
      handleError(res, error);
    }
  },
};

module.exports = cardController;
