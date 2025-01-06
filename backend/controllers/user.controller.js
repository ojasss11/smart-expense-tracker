const userModel = require("../models/user.model");

// Example function for user registration
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
