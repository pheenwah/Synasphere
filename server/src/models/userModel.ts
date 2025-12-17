import mongoose from "mongoose";

export interface IUser {
  sunSign: string;
  moonSign: string;
  risingSign: string;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    sunSign: { type: String, required: true },
    moonSign: { type: String, required: true },
    risingSign: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
