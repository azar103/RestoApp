const mongoose = require('mongoose');

const { Schema } = mongoose;


const UserSchema = new Schema({
    firstName:{type: String, required:true},
    lastName: {type: String, required: true},
    password: { type: String, required: true },
    passwordConfirmed:{type: String},
    email: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
},
{timestamps: true}
)


module.exports = mongoose.model('user', UserSchema);