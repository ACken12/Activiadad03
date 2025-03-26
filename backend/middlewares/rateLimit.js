const rateLimit = require("express-rate-limit");

// Limit login attempts (5 attempts per 15 minutes)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Demasiados intentos fallidos, intenta más tarde." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Limit registration attempts (3 attempts per hour)
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: { error: "Demasiados intentos de registro, intenta más tarde." },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { loginLimiter, registerLimiter };