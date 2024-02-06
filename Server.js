const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");

const taskRoutes = require("./routes/taskRoute");

// Middleware
app.use((req, res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next();
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});

const upload = multer({ storage });

mongoose.connect("mongodb://127.0.0.1:27017/taskmanagement", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
});
const Image = mongoose.model("Image", imageSchema);

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Image({
      filename: req.file.filename,
      path: req.file.path,
    });

    const savedImage = await newImage.save();

    res.json({ message: "Image uploaded successfully", image: savedImage });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Image upload failed" });
  }
});

app.get("/api/getImages", async (req, res) => {
  try {
    const images = await Image.find();
    const imageUrls = images.map((image) => ({
      filename: image.filename,
      _id: image._id,
      url: `/uploads/${image.filename}`,
    }));

    res.json({ images: imageUrls });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.put("/api/updateImage/:id", upload.single("image"), async (req, res) => {
  try {
    const imageId = req.params.id;
    const { filename } = req.file;

    const imageToUpdate = await Image.findById(imageId);

    if (!imageToUpdate) {
      return res.status(404).json({ error: "Image not found" });
    }

    imageToUpdate.filename = filename;

    const updatedImage = await imageToUpdate.save();

    res.json({ message: "Image updated successfully", image: updatedImage });
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ error: "Failed to update image" });
  }
});

app.delete("/api/deleteImage/:id", async (req, res) => {
  try {
    const imageId = req.params.id;
    const deletedImage = await Image.findByIdAndDelete(imageId);

    if (!deletedImage) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ error: "Failed to delete image" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("DB connected Successfully and listening to " + process.env.PORT);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/tasks", taskRoutes);
