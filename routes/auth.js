import express from "express";
import {
  handelLogin,
  handellogout,
  handelregister,
} from "../controllres/auth.js";

const router = express.Router();

router.post("/login", handelLogin);
router.post("/register", handelregister);
router.get("/logout", handellogout);

export default router;
