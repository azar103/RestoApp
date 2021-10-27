const Restaurant = require('../models/Restaurant');
const Account = require('../models/Account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).send(restaurants);
    } catch (error) {
        console.dir(error);
        res.status(400).send({ error });
    }
}

exports.findItem = async (req, res, next) => {
    try {
        console.log(req.params);
    } catch (error) {
        console.dir("2");
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

        res.status(500).send(error);
    }
}


exports.getRestaurantByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const restaurant = await Restaurant.findOne({ name });
        res.status(200).send(restaurant);
    } catch (error) {
        
    }
}

exports.getRestaurantById = async (req, res, next) => {
    try {
        const { restId } = req.params;
        const restaurant = await Restaurant.findById(restId);
        res.status(200).send(restaurant);
    } catch (error) {
        console.log('error');        
    }
}

exports.removeRestaurantItems = async (req, res, next) => {
    try {
        const { _id, _name } = req.params;
        let restaurant = await Restaurant.findOne({ name:_name });
        if (restaurant) {
            const arr = restaurant.items.map((item) => item._id.toString());
            const index = arr ? arr.indexOf(_id) : -1;
            if (index != -1) {
                restaurant.items.splice(index, 1);
            }
        }
        await restaurant.save();
    } catch (error) {
        res.status(500).send({ error })
    }
}



exports.updateRestaurant = async (req, res, next) => {
    try {
        const { _restaurantId, _itemId } = req.params;
        const restaurant = await Restaurant.findById(_restaurantId);
        const index = restaurant.items.map((item) => item._id.toString()).indexOf(_itemId);
        restaurant.items[index].name = req.body.name;
        restaurant.items[index].price = req.body.price;
        restaurant.items[index].description = req.body.description;
        restaurant.items[index].urlImg = req.file.path || null;
        restaurant.markModified('items');
         await restaurant.save();
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
}