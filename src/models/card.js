const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  textUk: {
    type: String,
    required: true,
  },
  textEn: {
    type: String,
    required: true,
  },
  nameUk: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
  designationUk: {
    type: String,
    required: true,
  },
  designationEn: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("Card", cardSchema, "reviewCards");

module.exports = Card;
