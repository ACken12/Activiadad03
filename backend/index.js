const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const app = express();

const port = 3000;
const IP = "192.168.1.123";


routerApi(app);

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);
app.listen(port, () => {
  console.log("http://" + IP + ":" + port + "/");
})


