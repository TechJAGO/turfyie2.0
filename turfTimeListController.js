const BookingDetails = require ('../models/bookingsModel')

const turfTimingList = async (req,res)=>{
    const list = await BookingDetails.find({})
    res.status(200).json(list)
}

module.exports = { turfTimingList }