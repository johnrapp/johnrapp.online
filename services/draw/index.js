const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

const PORT = 80;
const server = app.listen(PORT, function () {
  console.log(`Server listening on :${PORT}`);
});

const io = socketio.listen(server);

const drawApp = require('./app');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(cors());

app.use(morgan('tiny'));

drawApp(io);
