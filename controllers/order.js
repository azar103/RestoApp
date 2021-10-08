const Order = require('../models/Order');

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send({ error });
    }
}
exports.postOrder = async (req, res, next) => {
    try {
        const order = new Order({
            ...req.body
        })
        await order.save();
        res.status(200).send(order);
        
    } catch (error) {
        res.status(500).send({ error });
    }
}