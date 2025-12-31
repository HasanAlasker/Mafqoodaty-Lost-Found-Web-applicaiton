// models/Post.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      minlength: 2,
      maxlength: 25,
      required: true,
      trim: true,
    },
    userPhone: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        "phone",
        "keys",
        "wallet",
        "bag",
        "pet",
        "documents",
        "jewelry",
        "other",
      ],
    },
    name: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },

    type: {
      type: String,
      enum: ["found", "lost"],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "resolved"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

// Index for common queries
postSchema.index({ type: 1, city: 1, status: 1, createdAt: -1 });

const PostModel = mongoose.model("Post", postSchema);
export default PostModel;
