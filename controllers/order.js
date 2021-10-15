const Order = require('../models/Order');

const { Server } = require('socket.io');
const app = require('../server');
const server = require('../server');

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET","POST","PUT"]
    }
});

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

        io.emit('orders', { action: "create", order });
        console.log(io);
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
        const order = await Order.findById(_id);
        res.status(200).send({ msg: "status updated" });
        io.emit('orders', { action: "update", order });
    } catch (error) {
        res.status(500).send({ error });
    }
}