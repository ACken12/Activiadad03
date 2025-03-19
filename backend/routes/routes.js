const express = require('express');
const router = express.Router();
const usersRouter = require('./users.route');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema } = require('../schemas/users.schema');

router.get("/User/login", usersRouter.post);
router.post("/User/register",
  validatorHandler(createUserSchema, 'body'),  // Validate request body
  usersRouter.post
);



module.exports = router;
