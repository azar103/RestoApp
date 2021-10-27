const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
    userId: { type: String, required: true },
    restaurantId:{type: String, required: true},
    item: { type: Object, required: true},
    quantity:{type: Number, default:1}
})


module.exports = mongoose.model('CartItem', CartSchema);