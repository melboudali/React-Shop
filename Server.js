const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

process.env.NODE_ENV !== 'production' && require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// @Routes
app.use('/payment', require('./routes/Payment.Route'));
app.use('/cart', require('./routes/Cart.Route'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, err =>
  err ? console.log(err) : console.log(`~> Server running on port: ${port}`)
);
