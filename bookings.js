const express = require('express')
const { createBooking, getBookings, getBooking, deleteBooking, updateBooking } = require('../controllers/bookingController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// get all bookings 
router.get('/', getBookings)

// get single booking 
router.get('/:id', getBooking)

// post a new booking 
router.post('/', createBooking)

// delete a booking 
router.delete('/:id', deleteBooking)

// update a booking 
router.patch('/:id',updateBooking)



module.exports = router