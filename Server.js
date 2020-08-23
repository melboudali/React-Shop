const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

app.get('/', (req, res) => {
  res.json({
    code: 200,
    message: 'Welcome'
  });
});

app.listen(5000, () => console.log('Server Connected'));
