import mongoose from "mongoose";

const authUserSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const authUser = mongoose.model("auth-users", authUserSchema);
