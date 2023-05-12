const jwt = require("jsonwebtoken");

const authJwt = (user) => {
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isadmin: user.isadmin,
    },
    secretKey
  );
  return token;
};

module.exports = authJwt;
