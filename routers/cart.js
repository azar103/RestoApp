const express = require('express');
const cartCtrl = require('../controllers/cart');
const router = express.Router();

router.get('/', cartCtrl.getCart);
router.post('/newItem', cartCtrl.postItemCart);
router.delete('/:_id', cartCtrl.deleteItemCart);
router.put('/edit/:_id', cartCtrl.editQuantityAndPrice);
router.delete('/deleteItems/:userId', cartCtrl.deleteItemsByUserId);
module.exports = router;


