const express = require("express");
const router = express.Router();
const presentationController = require("../controllers/presentationController");

router.get("/", presentationController.getPresentation);
router.post("/", presentationController.submitPresentation);

module.exports = router;
