const morgan = require('morgan');

const express = require('express');
const app = express();
const http = require('http');

const abTestingApp = require('./app');

const PORT = 80;

app.use(express.static('public'));

app.use(morgan('tiny'));

abTestingApp(app);

const server = app.listen(PORT, function () {
  console.log(`Server listening on :${PORT}`);
});
