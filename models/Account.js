const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const AccountSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirmed:{type: String},
    role: {
        type: String,
        enum:["ROLE_USER","ROLE_SELLER","ROLE_ADMIN"]
    },
    
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Account', AccountSchema);