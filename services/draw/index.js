const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

const drawApp = require('./app');
const api = require('./app/api');

const PORT = 80;
const server = app.listen(PORT, function () {
  console.log(`Server listening on :${PORT}`);
});

const io = socketio.listen(server);

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(cors());

app.use(morgan('tiny'));

drawApp(io);
app.use('/api', api(express.Router()));


// // Enable HTML5 routing, serve index.html regardless of route
// // Must be declared after routes such as /api
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});