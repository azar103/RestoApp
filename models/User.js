const mongoose = require('mongoose');

const { Schema } = mongoose;


const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String
},
{timestamps: true}
)


module.exports = mongoose.model('user', UserSchema);