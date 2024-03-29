import express from "express";
import cors from "cors";
import users from "./routes/users.js";
import auth from "./routes/auth.js";
import mongoose from "mongoose";
import "dotenv/config";
const uri = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", users);
app.use("/auth", auth);

mongoose.connect(uri).then(() => console.log("db connected"));

app.listen(8000, () => {
  console.log("work!");
});
