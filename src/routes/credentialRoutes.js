const express = require("express");
const router = express.Router();
const credentialController = require("../controllers/credentialController");

router.get("/", credentialController.getAllCredentials);
router.get("/:id", credentialController.getCredentialById);
router.delete("/:id", credentialController.deleteCredentialById);
router.post("/", credentialController.createCredential);
router.post("/reset", credentialController.resetDatabase);

module.exports = router;
