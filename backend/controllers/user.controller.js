const userModel = require("../models/user.model");
const userServices = require("../services/user.services");
const { validationResult } = require("express-validator");

// Example function for user registration
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userServices.createUser({
    name,
    email,
    password: hashedPassword,
  });
  const token = await user.generateAuthToken();
  res.status(201).json({ user, token });
  // try {
  //   const { name, email, password } = req.body;
  // const hashedPassword = await userModel.hashPassword(password);
  // const user = new userModel({ name, email, password: hashedPassword });
  //   await user.save();
  //   res.status(201).send({ message: "User registered successfully" });
  // } catch (error) {
  //   res.status(400).send({ error: error.message });
  // }
};
