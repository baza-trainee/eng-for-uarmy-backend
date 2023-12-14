const Review = require("../models/card");

const reviewController = {
  createReview: async (req, res) => {
    const {
      imageUrl,
      textUk,
      textEn,
      nameUk,
      nameEn,
      designationUk,
      designationEn,
    } = req.body;
    const savedReview = await Review.create({
      imageUrl,
      textUk,
      textEn,
      nameUk,
      nameEn,
      designationUk,
      designationEn,
    });
    res.status(201).json(savedReview);
  },

  getAllReviews: async (req, res) => {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  },

  updateReview: async (req, res) => {
    const {
      imageUrl,
      textUk,
      textEn,
      nameUk,
      nameEn,
      designationUk,
      designationEn,
    } = req.body;

    const updates = {
      imageUrl,
      textUk,
      textEn,
      nameUk,
      nameEn,
      designationUk,
      designationEn,
    };

    const updatedReview = await Review.findByIdAndUpdate(
      req.params._id,
      { $set: updates },
      { new: true }
    );
    const HttpError = require("../helpers/HttpError");
    if (!updatedReview) {
      throw new HttpError(404, "Review not found");
    }
    res.status(200).json(updatedReview);
  },

  deleteReview: async (req, res) => {
    const deletedReview = await Review.findByIdAndDelete(req.params._id);
    const HttpError = require("../helpers/HttpError");
    if (!deletedReview) {
      throw new HttpError(404, "Review not found");
    }
    res.status(204).end();
  },
};

module.exports = reviewController;
