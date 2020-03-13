const User = require("../models/User");
const db = require("../config/db");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Private
exports.getUser = async (req, res, next) => {
  res.status(200).json({ success: true, user: req.user });
};

// @desc    Create new user
// @route   POST /api/v1/users
// @access  Public
exports.createUser = async (req, res, next) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(200).json({ success: true, data: user, token });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Login user
// @route   POST /api/v1/users/login
// @access  Private
exports.loginUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();

    if (process.env.NODE_ENV === "development") {
      options = {
        secure: false
      };
    } else if (process.env.NODE_ENV === "production") {
      options = {
        secure: true
      };
    }

    res.cookie("authToken", token, {
      maxAge: 48 * 60 * 60 * 1000,
      httpOnly: true,
      ...options
    });
    res.cookie("loggedIn", 1, {
      maxAge: 48 * 60 * 60 * 1000,
      ...options
    });
    res.status(200).json({ success: true, user, token });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Logout user
// @route   GET /api/v1/users/logout
// @access  Private
exports.logoutUser = async (req, res, next) => {
  console.log(["LOGOUT"]);
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.clearCookie("authToken");
    res.clearCookie("loggedIn");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Update single user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = async (req, res, next) => {};

// @desc    Delete single user
// @route   DELETE /api/v1/users/:id
// @access  Private
exports.deleteUser = async (req, res, next) => {};
