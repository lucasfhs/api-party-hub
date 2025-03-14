require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userByToken = async (token) => {
  try {
    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied (invalid autorization token)." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      throw new Error("Id does not exist");
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
module.exports = userByToken;
