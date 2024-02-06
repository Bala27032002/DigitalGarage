/ routes/itemRoutes.js
const express = require("express");
const itemController = require("../controllers/PlacementController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Multer configuration for image upload
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.fieldname);
  },
});

const upload = multer({ storage });

// Define routes
router.get("/items", itemController.getAllItems);
router.post("/items", upload.single("image"), itemController.createItem);
router.put("/items/:id", upload.single("image"), itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

module.exports = router;