import Order from '../models/Order';

exports.getOrders = (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send({ error });
    }
}