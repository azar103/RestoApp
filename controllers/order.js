const Order = require('../models/Order');

const { Server } = require('socket.io');
const app = require('../server');
const server = require('../server');
const Account = require('../models/Account');
const User = require('../models/User');


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
        const { locality, street, zipCode, phone } = req.body.user.address;
        if (!locality || !street || !zipCode || !phone) {
            return res.status(400).send({msg:"address fileds required!"});
        }
       const order = new Order({
           ...req.body
        })
        await order.save();
        res.status(200).send(order);
    } catch (error) {
        console.dir(error);
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

exports.deleteOrder = async (req, res, next) => {
    try {
        const { _id } = req.params;
        await Order.findByIdAndRemove({ _id });
        res.status(200).send({ msg: "order deleted" });
    } catch (error) {
        res.status(500).send({ error });   
    }
}