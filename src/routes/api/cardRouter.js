const express = require("express");
const router = express.Router();
const cardController = require("../../controllers/cardController");

router.post("/cards", cardController.createCard);
router.get("/cards", cardController.getAllCards);
router.delete("/cards/:_id", cardController.deleteCard);
router.get("/cards/:_id", cardController.getCardById);
router.put("/cards/:_id", cardController.updateCard);

module.exports = router;
