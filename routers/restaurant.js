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
const upload = multer({ storage }).single('imageUrl');
router.post('/upload', upload, (req, res, next) => {
    res.send({
        filename: req.file.originalname,
        path: req.file.path
   })
})


router.get('/', restaurantCtrl.getRestaurants);
router.post('/',upload, restaurantCtrl.createRestaurant);

module.exports = router;
