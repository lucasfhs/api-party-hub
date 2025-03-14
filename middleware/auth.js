require("dotenv").config();
const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) {
    return res
      .status(401)
      .json({ error: "Access denied (invalid autorization token)." });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = checkToken;
