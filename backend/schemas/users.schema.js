const Joi = require('joi');

const email = Joi.string().email().min(5).max(30);
const password = Joi.number().integer().min(10);

const createUserSchema = Joi.object({
  password: password.required(),
  email: email.required(),
});
