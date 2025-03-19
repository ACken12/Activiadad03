const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const password = Joi.number().integer().min(10);


const createUserSchema = Joi.object({
  name: name.required(),
  price: password.required(),
});
