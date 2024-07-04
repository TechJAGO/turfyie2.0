const Bookingdetail = require ('../models/bookingsModel')
const Admindetail = require ('../models/adminModel')

// all bookings 
const turfList = async (req,res)=>{
    const list = await Admindetail.find({})
    res.status(200).json(list)
}

// single id bookings 
const getBookingbyId = async (req,res)=>{
    const { id } = req.params
    const booking = await Bookingdetail.find({admin_id:id})

    if (!booking){
        return res.status(404).json({error: 'No such entry found'})
    }

    res.status(200).json(booking)
} 


module.exports = { turfList, getBookingbyId }