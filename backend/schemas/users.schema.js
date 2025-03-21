const Joi = require("joi");

const email = Joi.string().email().min(5).max(50).required();
const password = Joi.string()
  .min(8)
  .max(30)
  .pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)
  .message("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número")
  .required();

const createUserSchema = Joi.object({
  email,
  password,
});

module.exports = { createUserSchema };
