const express = require('express');
const cors = require("cors");
const routes = require('./routes/routes.js');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');



const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());



app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);
app.use('', routes);

app.listen(port, 'localhost', () => {
  console.log('Servidor corriendo en http://localhost:'+ port);
});


