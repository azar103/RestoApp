const express = require('express');
const cartCtrl = require('../controllers/cart');
const router = express.Router();

router.get('/', cartCtrl.getCart);
router.post('/newItem', cartCtrl.postCart);
router.delete('/:_id', cartCtrl.deleteCart);
module.exports = router;


