import bcryptjs from "bcryptjs";
import { authUser } from "../modules/auth-users.js";
import jwt from "jsonwebtoken";

export const handelLogin = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  if (!name || !password) {
    res.status(409).json("user name and passoword are required");
    return;
  }

  const user = await authUser.findOne({
    name: req.body.name,
  });
  if (!user) {
    res.status(409).json("wrong user name or password !");
    return;
  }

  const validPassword = await bcryptjs.compare(
    req.body.password,
    user.password
  );
  if (!validPassword) {
    res.status(409).json("wrong user name or password !");
    return;
  }

  const token = jwt.sign(name, process.env.JWT_KEY);

  res.cookie("auth-token", token).json({
    userName: user.name,
    userToken: token,
  });
};

export const handelregister = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const hashedpassword = await bcryptjs.hash(password, 8);

  if (!name || !password) {
    res.status(409).json("user name and passoword are required");
    return;
  }

  const checkuser = await authUser.findOne({ name: req.body.name });
  if (checkuser) {
    res.status(409).json("user name or password already exist");
    return;
  }

  const user = new authUser({
    name: req.body.name,
    password: hashedpassword,
  });
  await user.save();
  const token = jwt.sign(name, process.env.JWT_KEY);
  res.cookie("auth-token", token).json({
    userName: user.name,
    userToken: token,
  });
};

export const handellogout = (req, res) => {
  res
    .clearCookie("auth-token", {
      secure: true,
      sameSite: "none",
    })
    .json("Logout Success");
};
