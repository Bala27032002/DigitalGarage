const express = require("express");
const multer = require("multer"); 
const router = express.Router();

const {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: "public/uploads", // Path to the public folder
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Route definitions
router.post("/", upload.single("urlFile"), createTask);
router.get("/", getTasks);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;