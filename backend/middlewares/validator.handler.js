const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      return res.status(401).json({
        statusCode: 401,
        error: 'Unauthorized',
        message: error.details.map(err => err.message)
      });
    }
    next();
  }
}

// Mensaje de error se devuelva en tipo json y que el estus no sea error en el servidor sino que sea  el estatus code
// de credenciales invalidad

module.exports = validatorHandler;
