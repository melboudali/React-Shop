const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', (req, res) => {
  console.log('server is running')
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    stripeErr
      ? res.status(500).send({ error: stripeErr })
      : res.status(200).send({ success: stripeRes });
  });
});

module.exports = router;
