const { createUserSchema } = require("../schemas/user.schema");

module.exports = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      error: error.details.map((err) => err.message),
    });
  }

  next();
};