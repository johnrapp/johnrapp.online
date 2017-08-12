const morgan = require('morgan');

const express = require('express');
const app = express();
const http = require('http');
const cookieParser = require('cookie-parser');

const abTestingApp = require('./app');

const PORT = 80;

app.use(cookieParser());

abTestingApp(app);

app.use(express.static('public'));

app.use(morgan('tiny'));

const server = app.listen(PORT, function () {
  console.log(`Server listening on :${PORT}`);
});
