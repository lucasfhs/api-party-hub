const router = require("express").Router();
const User = require("../../models/user");
const auth = require("../../middleware/auth");
const bcrypt = require("bcrypt");
const SALT_NUMBER = 12;
// register an user
router.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id cannot be null.");
    }
    const user = await User.findOne({ _id: id }, { password: 0 });
    if (!user) {
      throw new Error("User does not exist.");
    }
    res.status(200).json({ result: { user } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, confirmPassword } = req.body;
    if (!id) {
      throw new Error("id cannot be null.");
    }
    if (!password || !confirmPassword) {
      throw new Error("Password or re-password cannot be null.");
    }
    if (password !== confirmPassword) {
      throw new Error("Password's don't match.");
    }
    const salt = await bcrypt.genSalt(SALT_NUMBER);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        name,
        email,
        password: passwordHash,
      },
      { new: true, fields: { password: 0 } }
    );
    if (!user) {
      throw new Error("User does not exist.");
    }
    res.status(200).json({ result: { user } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
