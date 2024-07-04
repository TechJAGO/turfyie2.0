const Booking = require('../models/bookingsModel')
const mongoose = require('mongoose')

// get all bookings 

const getBookings = async (req, res) =>{

    const admin_id = req.admin._id

    const bookings = await Booking.find({ admin_id }).sort({createdAt: -1})

    res.status(200).json(bookings)
}

// get single booking 

const getBooking = async (req,res)=>{
    const { id } = req.params
    const booking = await Booking.findById(id)

    if (!booking){
        return res.status(404).json({error: 'No such entry found'})
    }

    res.status(200).json(booking)
} 

// create new booking 

const createBooking = async ( req, res ) =>{
    const { bookerName, bookerAmount, bookerPhoneno, bookerDate, bookerStartTime, bookerEndtime } = req.body

    let emptyFields = []

    if(!bookerName){
        emptyFields.push('bookerName')
    }
    if(!bookerAmount){
        emptyFields.push('bookerAmount')
    }
    if(!bookerPhoneno){
        emptyFields.push('bookerPhoneno')
    }
    if(!bookerDate){
        emptyFields.push('bookerDate')
    }
    if(!bookerStartTime){
        emptyFields.push('bookerStartTime')
    }
    if(!bookerEndtime){
        emptyFields.push('bookerEndtime')
    }

    if(emptyFields.length>0){
        return res.status(400).json({ error: 'Please fill in all details', emptyFields })
    }

    try{
        const admin_id = req.admin._id
        const booking = await Booking.create({
            bookerName, bookerAmount, bookerPhoneno, bookerDate, bookerStartTime, bookerEndtime, admin_id 
        })
        res.status(200).json(booking)

    } catch (error) {

        res.status(400).json({error:error.message})

    }
}

// delete a booking 

const deleteBooking = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Booking"})
    }

    const booking = await Booking.findOneAndDelete({_id: id})

    if (!booking){
        return res.status(400).json({error: "No such entry found"})
    }

    res.status(200).json(booking)
}

// update a booking 

const updateBooking = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such entry found"})
    }

    const booking = await Booking.findByIdAndUpdate({_id:id}, {...req.body})
    if(!booking){
        return res.status(400).json({error: "No such entry found"})
    }
    res.status(200).json(booking)
}

// checking token details 



module.exports = {
    createBooking, getBookings, getBooking, deleteBooking, updateBooking
}