const mongoose = require('mongoose');


const { Schema } = mongoose;


const FoodSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    urlImg: { type: String, required: true },
    description: { type: String, required: true },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
},
    {
    timestamps: true
}
)


module.exports = mongoose.model('food', FoodSchema);