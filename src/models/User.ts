import mongoose from "mongoose";
import { User } from "../interface";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  administrator: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model<User & mongoose.Document>("User", userSchema);
