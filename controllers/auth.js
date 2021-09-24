const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!email || !firstName || !lastName || !email || !password) {
            return res.status(500).send({ msg: 'please enter all fields' });
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(500).send({ msg: 'User already exist' })
        }

        user = new User({ firstName, lastName, email, password });
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound);
        user.password = hashPassword;
        const payload = {
            _id: user.id
        }

        const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
            expiresIn: '30d'
        })
        await user.save();
        res.status(200).send({ user, token: "bearer " + token,  msg: 'registration successfully' });
    } catch (error) {
        res.status(500).send({ error });
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({ msg: 'please enter all fields' });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(500).send({ msg: 'User does not exist' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(500).send({ msg: 'invalid email/password' });
        }
        const payload = {
            _id: user.id
        }

        const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
            expiresIn: '30d'
        })
        res.send({ user, token: "bearer " + token,  msg: 'login successfully' });
    } catch (error) {
      
    }
}

exports.authMe = async (req, res, next) => {
    let userFound = await User.findById(req.user).select('-password');
   res.status(200).send({user: userFound})
}
