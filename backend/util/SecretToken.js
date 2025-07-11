const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id}, process.env.TOKEN_KEY, {
    expiresIn: 1 * 24 * 60 * 60, // 1 day
  });
};