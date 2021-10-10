const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Account = require('../models/Account');
exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, passwordConfirmed, role } = req.body;
        /*if (!firstName || !lastName || !email || !password || !passwordConfirmed) {
            return res.status(500).send({ msg: 'please fill in all the fields' });
        }
       /* if (password !== passwordConfirmed) {
            return res.status(500).send({msg: 'passwords are not matched'})
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(500).send({ msg: 'User already exist' })
        }*/
        const account = new Account({
            email,
            password,
            passwordConfirmed,
            role
        })
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(account.password, saltRound);
        account.password = hashPassword;
        const accountSaved = await account.save();
         
        const user = new User({ firstName, lastName, account:  accountSaved });
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
        console.dir(error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({ msg: 'please fill in  all the fields' });
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

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error });
    }
}

exports.checkAdmin = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        res.status(200).send({isAdmin: user.isAdmin});
    } catch (error) {
        
    }
}