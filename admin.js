const express = require('express')
const { turfList, getBookingbyId } = require('../controllers/turflistcontroller')
const { turfTimingList } = require('../controllers/turfTimeListController')
const { loginAdmin, signAdmin, signUser, loginUser } = require('../controllers/userController')


const router = express.Router()

// all turf details 

router.get('/turflist', turfList)

// all turf time details 

router.get('/turftimelist', turfTimingList)

// all turf details 

router.get('/turftimelist/:id', getBookingbyId)

// login Admin

router.post('/login' , loginAdmin)

// signup Admin

router.post('/signup' , signAdmin)

// login User

router.post('/loginuser' , loginUser)

// signup User

router.post('/signupuser' , signUser)

module.exports = router