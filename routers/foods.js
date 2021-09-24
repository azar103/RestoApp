const express = require('express');

const router = express.Router();
const foodCtrl = require('../controllers/foods');

router.get('/', foodCtrl.getFoods);

router.post('/newFood', foodCtrl.saveFood);

router.delete('/:_id', foodCtrl.deleteFood);

router.put('/:_id', foodCtrl.editFood);

module.exports = router;