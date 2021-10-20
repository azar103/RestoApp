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
        const { name,items, address, minOrderAmount } = req.body;
        const { street, locality, zip, lat, lng, phoneNum } = address;
        const { email, password, passwordConfirmed } = req.body.account;
        const { file } = req;
       if (!name || !file || !street || !locality || !zip || !lat || !lng || !phoneNum || !email || !street || !locality || !items) {
            return res.status(500).send({msg:'all fields are required'})
        }
        if (password !== passwordConfirmed) {
            return res.status(500).send({ msg: 'passwords are not matched' });
        }
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
        const accountSaved= await account.save();
        const restaurant = new Restaurant({
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
        await restaurant.save();
        res.status(200).send({
            restaurant, token: "bearer " + token, msg: 'restaurant added  successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error });
    }
}