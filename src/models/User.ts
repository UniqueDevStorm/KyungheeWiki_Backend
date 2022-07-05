import mongoose from "mongoose";
import { User } from "../interface";

const userSchema = new mongoose.Schema(
  {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    username: {
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
    confirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
    administrator: {
      type: Boolean,
      required: true,
      default: false,
    },
    boardMember: {
      type: Boolean,
      required: true,
      default: false,
    },
    token: {
        type: String,
        required: true,
    }
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<User & mongoose.Document>("User", userSchema);
