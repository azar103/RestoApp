const mongoose = require('mongoose');


const { Schema } = mongoose;


const FoodSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    urlImg: String
},
    {
    timestamps: true
}
)


module.exports = mongoose.model('food', FoodSchema);