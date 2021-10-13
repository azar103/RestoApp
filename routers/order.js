const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/order');
router.get('/', orderCtrl.getOrders);
router.post('/', orderCtrl.postOrder);
router.put('/:_id', orderCtrl.editStatus);

module.exports = router;