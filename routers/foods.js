const express = require('express');
const multer  = require('multer')
const router = express.Router();
const foodCtrl = require('../controllers/foods');
var upload = multer()
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({storage});
router.get('/', foodCtrl.getFoods);

router.post('/newFood', foodCtrl.saveFood);

router.delete('/:_id', foodCtrl.deleteFood);

router.put('/:_id', foodCtrl.editFood);

router.post('/single', upload.array('profiles', 4), foodCtrl.postImg);

module.exports = router;