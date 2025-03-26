const rateLimit = require("express-rate-limit");

// Limit login attempts (5 attempts per 15 minutes)
const loginLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 20,
  message: { 
    error: "Demasiados intentos fallidos, intenta más tarde.",
    statusCode: 429
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Limit registration attempts (3 attempts per hour)
const registerLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 10,
  message: { 
    error: "Demasiados intentos de registro, intenta más tarde.",
    statusCode: 429
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { loginLimiter, registerLimiter };