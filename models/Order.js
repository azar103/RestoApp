const mongoose = require('mongoose');

const { Schema } = mongoose;


const OrderSchema = new Schema({
    items: [
        {
            item: { type: Object, required: true },
            quantity: {type: Number, required: true}
        }
    ],
    status: {
        type: String,
        required: true,
        enum: [
            "Placed",
            "Cancelled",
            "Accepted",
            "Completed",
            "Out For Delivery"
        ]
    },
    user: {
        email: {
            type: String,
            required: true
        },
        address: {
            type: Object,
            required: true
        },
        firstName: {
            type: String,
            required:true
        },
        lastName: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }
    }
}, {
    timestamps:true
})

module.exports = mongoose.model('order', OrderSchema);