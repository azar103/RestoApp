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
        const { locality, street, zipCode, phoneNumber } = req.body.user.address;
        if (!locality || !street || !zipCode || !phoneNumber) {
            return res.status(500).send({ msg: 'address fields required' });
        }
        const order = new Order({
            ...req.body
        })
        await order.save();
        res.status(200).send(order);
        
    } catch (error) {
        res.status(500).send({ error });
    }
}

exports.editStatus = async (req, res, next) => {
    try {
        const { _id } = req.params;
        await Order.updateOne({_id}, {$set: {
            "status": req.body.status
        }
        })
        res.status(200).send({msg:"status updated"})
    } catch (error) {
        res.status(500).send({ error });
    }
}