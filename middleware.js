const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const authMiddleware = (req, res, next) => {
  const reqToken = req.headers.authentication.trim();
  if (!reqToken || !reqToken.startsWith(Bearer)) {
    return res.status(403).json({
      msg: "No authorization header found",
    });
  }
  const [, token] = reqToken.split(" ");
  try {
    const verify = jwt.verify(token, JWT_SECRET);
    if (!verify) {
      return res.status(403).json({
        msg: "Error verifying token",
      });
    }
    req.userId = verify.userId;
    next();
  } catch (e) {
    return res.status(403).json({});
  }
};
module.exports = authMiddleware;
