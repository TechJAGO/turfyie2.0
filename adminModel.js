const mongoose = require('mongoose');

const Schema = mongoose.Schema

const adminSchema = new Schema ({
    aname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    },
    turfName:{
        type: String,
        required: true,
    },
    turfAd:{
        type: String,
        required: true,
    },

},{ timestamps: true })

module.exports = mongoose.model('Admindetail', adminSchema)