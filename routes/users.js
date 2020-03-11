const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser
} = require("../controllers/users");

// Middleware
const authentication = require("../middleware/authentication");

const router = new express.Router();

router
  .route("/")
  .get(authentication, getUsers)
  .post(createUser);

router
  .route("/me")
  .get(authentication, getUser)
  .patch(authentication, updateUser)
  .delete(authentication, deleteUser);

router.route("/login").post(loginUser);

router.route("/logout").get(authentication, logoutUser);

module.exports = router;
