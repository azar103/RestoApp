const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurant');

router.get('/', restaurantCtrl.getRestaurants);
router.post('/', restaurantCtrl.createRestaurant);

module.exports = router;
