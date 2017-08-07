const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 80;

app.use(express.static('public'));
app.use(bodyParser.json());

app.use(cors());

app.use(morgan('tiny'));

app.listen(PORT, function () {
  console.log(`Server listening on :${PORT}`);
});