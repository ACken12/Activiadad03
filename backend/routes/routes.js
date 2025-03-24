const express = require('express');
const authenticate = require('../middlewares/auth.middleware');
const router = express.Router();
const usersRouter = require('./users.route');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema } = require('../schemas/users.schema');


router.post("/User/register",
  validatorHandler(createUserSchema, 'body'),  // Validate request body
  usersRouter.post
);

router.post("/User/login", usersRouter.postLogin);

router.get("/User/validate-token", authenticate, (req, res) => {
  res.json({ message: "Token is valid", user: req.user });
});



// router.get("/User/profile", authenticate, usersRouter.getProfile);

module.exports = router;
