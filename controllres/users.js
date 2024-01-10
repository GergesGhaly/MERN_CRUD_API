import { usermodel } from "../modules/user.js";

export const getusers = async (req, res) => {
  const data = await usermodel.find();
  res.status(200).json(data);
};

export const createuser = async (req, res) => {
  const User = new usermodel(req.body);
  if (!req.body.name || !req.body.age) {
    return res.send("username & age is requerd");
  }
  await User.save();
  res.status(201).send("user created");
};

export const updateuser = async (req, res) => {
  const id = req.params.id;
  await usermodel.findByIdAndUpdate(id, req.body);
  res.status(204).send("user updated");
};

export const deleteuser = async (req, res) => {
  const id = req.params.id;
  await usermodel.deleteOne({ _id: id });
  res.status(204).send("user deleted");
};
