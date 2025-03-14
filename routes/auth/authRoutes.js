require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const SALT_NUMBER = 12;
// register an user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      throw new Error("Missing required fields.");
    }
    if (password !== confirmPassword) {
      throw new Error("Password's don't match.");
    }
    const salt = await bcrypt.genSalt(SALT_NUMBER);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      password: passwordHash,
    });
    const newUser = await user.save();
    const token = jwt.sign(
      { id: newUser._id, name },
      process.env.JWT_SECRET_KEY
    );
    res.status(201).json({ result: { token, userId: newUser._id } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Unregistered user.");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      throw new Error("Invalid password.");
    }
    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET_KEY
    );
    res.status(200).json({
      result: {
        token,
        userId: user._id,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
