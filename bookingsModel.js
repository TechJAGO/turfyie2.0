const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookingsSchema = new Schema ({
    bookerName:{
        type: String,
        required: true,
    },
    bookerAmount:{
        type: Number,
        required: true,
    },
    bookerPhoneno:{
        type:Number,
        required: true,
    },
    bookerDate:{
        type: String,
        required: true,
    },
    bookerStartTime:{
        type: String,
        required: true,
    },
    bookerEndtime:{
        type: String,
        required: true,
    },
    admin_id: {
        type: String,
        required: true,
    }

},{ timestamps: true })

module.exports = mongoose.model('Booking', bookingsSchema)