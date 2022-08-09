const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const { config } = require("./../config/config");

const router = express.Router();

router.post(
  "/login",
   passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      console.log(user);
      const payload = {
        sub: user.id,
        role: user.role,
      };
      console.log(payload);
      const token = jwt.sign(payload, config.jwtSecret , {expiresIn:'14d'});
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
