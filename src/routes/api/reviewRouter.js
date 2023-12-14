const express = require("express");
const router = express.Router();
const reviewController = require("../../controllers/reviewController");

router.post("/reviews", reviewController.createReview);
router.get("/reviews", reviewController.getAllReviews);
router.delete("/reviews/:_id", reviewController.deleteReview);
router.patch("/reviews/:_id", reviewController.updateReview);

module.exports = router;
