const jwt = require("jsonwebtoken");
const User = require("../models/User");
const chalk = require("chalk");

const authentication = async (req, res, next) => {
  console.log(chalk.yellow("[TOKEN]", req.cookies.authToken));
  try {
    // const token = req.header("Authorization").replace("Bearer ", "");
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = authentication;
