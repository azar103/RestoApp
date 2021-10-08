const express = require('express');
const multer = require('multer');
const router = express.Router();
const foodCtrl = require('../controllers/foods');
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

router.get('/', foodCtrl.getFoods);

router.post('/newFood',upload, foodCtrl.saveFood);

router.delete('/:_id', foodCtrl.deleteFood);

router.put('/:_id',upload, foodCtrl.editFood);

router.get('/:_id', foodCtrl.getOneFood);

module.exports = router;