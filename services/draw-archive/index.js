const bodyParser = require('body-parser');
const morgan = require('morgan');

const express = require('express');
const app = express();

const PORT = 80;

const api = require('./app');

app.use(bodyParser.json());

app.use(morgan('tiny'));

api(app);

const server = app.listen(PORT, function () {
  console.log(`Server listening on :${PORT}`);
});
