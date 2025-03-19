const express = require('express');
const cors = require("cors");
const bdPostgresql = require('./bd.js');
const routes = require('./routes/routes.js');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');



const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;
const IP = "192.168.1.123";


routes(app);

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);
app.use('', routes);

app.listen(port, () => {
  console.log("Servidor corriendo en http://" + IP + ":" + port + "/");
})


