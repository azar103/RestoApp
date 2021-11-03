const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required:true
        },
        locality: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        },
        phoneNum: {
            type: String,
            required: true
        }
    },
    minOrderAmount: {
        type: Number,
        required: true
    },
    items: [Object],
    account: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Account"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('restaurant', RestaurantSchema);