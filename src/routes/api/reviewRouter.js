const express = require("express");
const router = express.Router();
const { authMiddleware } = require('../../middlewares');
const reviewController = require("../../controllers/reviewController");
// only for loggedIn admin
router.use(authMiddleware);

router.post("/reviews", reviewController.createReview);
router.get("/reviews", reviewController.getAllReviews);
router.delete("/reviews/:_id", reviewController.deleteReview);
router.patch("/reviews/:_id", reviewController.updateReview);

module.exports = router;
