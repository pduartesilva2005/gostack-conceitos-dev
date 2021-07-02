const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const logRequests = require('./utils/logRequests');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(logRequests);

app.listen(3333, () => {
  console.log('Server Started at http://localhost:3333');
});
