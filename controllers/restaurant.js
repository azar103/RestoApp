const Restaurant = require('../models/Restaurant');
const Account = require('../models/Account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).send(restaurants);
    } catch (error) {
        res.status(400).send({ error });
    }
}

exports.createRestaurant = async (req, res, next) => {
    try {
        const { name,items, minOrderAmount, street, locality, zip, lat, lng, phoneNum, email, password, passwordConfirmed} = req.body;
        const { file } = req;
     
       let account = await Account.findOne({ email });
        if (account) {
            return res.status(500).send({ msg: 'Restaurant already exist' });
        }
         account = new Account({
            email,
            password,
            passwordConfirmed,
            role: "ROLE_SELLER"
         });
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound);
        account.password = hashPassword;
        account.passwordConfirmed = hashPassword;
        const accountSaved = await account.save();
        
        const user = new Restaurant({
            name,
            imageUrl: file.path || null,
            address: {
                street,
                locality,
                zip,
                lat,
                lng,
                phoneNum
            },
            items,
            account: accountSaved,
            minOrderAmount
        });
        const payload = {
            _id: account._id
        };
        const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
            expiresIn: '30d'
        });
        await user.save();
        res.status(200).send({
            user, token: "bearer " + token, msg: 'restaurant added  successfully'
        });
    } catch (error) {
        console.dir(error);
        res.status(500).send(error);
    }
}