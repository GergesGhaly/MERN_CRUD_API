import mongoose from "mongoose";

const user = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  userAuthId: { type: String, required: true },
});

export const usermodel = mongoose.model("users", user);
