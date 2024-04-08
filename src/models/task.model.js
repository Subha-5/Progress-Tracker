import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: String,
    description: String,
    totalParts: {
      type: Number,
      required: true,
      default: 1,
    },
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["current", "planning", "completed", "on-hold", "dropped"],
      default: "current",
    },
    isFavourite: {
      type: Boolean,
      default: false
    },
    "revisit-count": {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);

export default Task;
