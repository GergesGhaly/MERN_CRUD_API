import express from "express";
import {
  createuser,
  deleteuser,
  getusers,
  updateuser,
} from "../controllres/users.js";

const router = express.Router();

router.get("/getdata", getusers);
router.post("/createuser", createuser);
router.put("/updateuser/:id", updateuser);
router.delete("/deleteuser/:id", deleteuser);

export default router;
