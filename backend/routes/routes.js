const express = require('express');
const authenticate = require('../middlewares/auth.middleware');
const router = express.Router();
const usersRouter = require('./users.route');
const validatorHandler = require('../middlewares/validator.handler');
const { loginLimiter, registerLimiter } = require("../middlewares/rateLimit");
const { createUserSchema } = require('../schemas/users.schema');


router.post("/User/register",
  registerLimiter, 
  validatorHandler(createUserSchema, 'body'),  // Validate request body
  usersRouter.post
);

router.post("/User/login", loginLimiter, 
  validatorHandler(createUserSchema, 'body'), 
  usersRouter.postLogin
);

router.get("/User/validate-token", authenticate, (req, res) => {
  res.json({ message: "Token is valid", user: req.user });
});



// router.get("/User/profile", authenticate, usersRouter.getProfile);

module.exports = router;