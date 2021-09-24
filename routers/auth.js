const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');
const passport = require('passport');
require("../config/passport")(passport);
router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);
router.get('/me', passport.authenticate('jwt', { session: false}) ,authCtrl.authMe);
module.exports = router;