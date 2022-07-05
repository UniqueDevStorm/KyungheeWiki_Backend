import mongoose from "mongoose";
import { Post } from "../interface";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

export default mongoose.model<Post & mongoose.Document>("Post", postSchema);
