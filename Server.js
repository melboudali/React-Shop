const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const app = express();
const enforce = require('express-sslify');
const port = process.env.PORT || 5000;

process.env.NODE_ENV !== 'production' && require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());
app.use(cors());
// app.use(enforce.HTTPS({ trustProtoHeader: false }));

app.use('/payment', require('./routes/Payment.Route'));

// Service Worker
app.get('/service-worker', (_, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, err =>
  err ? console.log(err) : console.log(`~> Server running on port: ${port}`)
);
