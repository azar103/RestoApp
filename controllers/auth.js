const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Account = require('../models/Account');
const Restaurant = require('../models/Restaurant');
exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, passwordConfirmed, role } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(500).send({ msg: 'please fill in all the fields' });
        }
        if (password !== passwordConfirmed) {
            return res.status(500).send({msg: 'passwords are not matched'})
        }
        let account = await Account.findOne({ email });

  
        if (account) {
            return res.status(500).send({ msg: 'User already exist' })
        }
         account = new Account({
            email,
            password,
            passwordConfirmed,
            role
        })
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound);
        account.password = hashPassword;
        account.passwordConfirmed = hashPassword;

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
        const {email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({ msg: 'please fill in  all the fields' });
        }
        let account = await Account.findOne({ email });

        if (!account) {
            return res.status(500).send({ msg: 'User does not exist' });
        }
            
        
        const match = await bcrypt.compare(password, account.password); 
        if (!match) {
            return res.status(500).send({ msg: 'invalid email/password' });
        }
        let user;
        if (account.role === "ROLE_USER") {
             user= await User.findOne({account:account._id.toString()})
        } else if (account.role === "ROLE_SELLER") {
            user = await Restaurant.findOne({
                account: account._id.toString()
            });
        }
       
        const payload = {
            _id: user.id
        }

        const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
            expiresIn: '30d'
        })
        user.account = account;
       
        res.send({ user, token: "bearer " + token,  msg: 'login successfully' });
    } catch (error) {
        console.dir(error);
    }
}

exports.authMe = async (req, res, next) => {
    let user = await User.findById(req.user);
    const account = await Account.findById(user.account.toString()).select('-password').select('-passwordConfirmed');
    user.account = account;
   res.status(200).send({user})
}

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        const copy = [];
    
        users.forEach(async (user,index) => {
            const account = await Account.findById(user.account.toString());
            user.account = account;
            copy.push(user)
            console.log(copy);
        })
        res.status(200).send(copy);
         
    
        //res.status(200).send(copy);
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