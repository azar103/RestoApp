const express = require('express');
const router = express.Router();
const multer = require('multer');
const restaurantCtrl = require('../controllers/restaurant');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage }).single('urlImg');
router.post('/upload', upload, (req, res, next) => {
    res.send({
        filename: req.file.originalname,
        path: req.file.path
   })
})


router.get('/', restaurantCtrl.getRestaurants);
router.post('/', upload, restaurantCtrl.createRestaurant);
router.get('/:name', restaurantCtrl.getRestaurantByName);
router.get('/:restId', restaurantCtrl.getRestaurantById);
router.get('/:_name/:_id', restaurantCtrl.removeRestaurantItems);
router.put('/:_restaurantId/:_itemId', upload, restaurantCtrl.updateRestaurant);

module.exports = router;
