const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    courseName: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    url: {
      type: String,
    },
    duration: {
      type: String,
    },
    

  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
