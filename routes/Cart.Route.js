const express = require('express');
const router = express.Router();

//@route    POST /cart
//@desc     Get cart items after payment
//@access   Private
router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
