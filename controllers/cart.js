const Cart = require('../models/Cart');

exports.getCart = async (req, res, next) => {
    try {
        const cart = await Cart.find();
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send({ error });
    }
}
exports.postItemCart = async (req, res, next) => {
    try {
        const { name} = req.body.item;
        const { userId,quantity } = req.body;
        let cartItem = await Cart.findOne({
            'item.name': name,
            'userId': userId
        });
            if (cartItem) {
                return res.status(400).send({ msg: 'Cart already exist!' });
        }

          
        cartItem = new Cart({
            ...req.body
        });
        await cartItem.save();
        res.status(200).send({msg:"Item Added Successufly"})
    } catch (error) {
        res.status(400).send({ error });
    }
}
exports.deleteItemCart = async (req, res, next) => {
    try {
        const { _id } = req.params;
        await Cart.findByIdAndRemove(_id);
        res.status(200).send({ msg: "Iteme removed Successufly" });

    } catch (error) {
        res.status(400).send({ error });
    }
}

exports.editQuantityAndPrice = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const cartItem = await Cart.updateOne({ _id }, {
            $set: {
                "item.price": req.body.item.price,
                "quantity": req.body.quantity
        }})
        res.status(200).send(cartItem.item);
    } catch (error) {
        res.status(400).send({error})
    }
}

exports.deleteItemsByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params;
        await Cart.findOne({ userId }).remove();
        res.status(200).send({ msg: 'item deleted' });
    } catch (error) {
        res.status(400).send({ error });
    }
}

exports.deleteAll = async (req, res, next) => {
    try {
        const { userId } = req.params;
        await Cart.findOne({ userId }).deleteMany();
        res.status(200).send({ msg: 'items deleted' });
        
    } catch (error) {
        
    }
}