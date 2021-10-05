const Cart = require('../models/Cart');

exports.getCart = async (req, res, next) => {
    try {
        const cart = await Cart.find();
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send({ error });
    }
}

exports.postCart = async (req, res, next) => {
    try {
        const cart = new Cart({...req.body});
        await cart.save();
        res.status(200).send({msg:"Item Added Successufly"})
    } catch (error) {
        res.status(400).send({ error });
    }
}

exports.deleteCart = async (req, res, next) => {
    try {
        const { _id } = req.params;
        await Cart.findByIdAndRemove(_id);
        res.status(200).send({ msg: "Iteme removed Successufly" });

    } catch (error) {
        res.status(400).send({ error });
    }
}

