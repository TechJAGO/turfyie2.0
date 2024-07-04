import React, { useEffect } from 'react'
import BookingDetails from '../components/BookingDetails'
import BookingForm from '../components/BookingForm'
import { useBookingContext } from '../hooks/useBookingContext'
import { useAuthContext } from '../hooks/useAuthContext' 
import CalenderComponent from '../components/CalenderComponent'

const Layout = () => {

const {bookings, dispatch}= useBookingContext()
const { admin } = useAuthContext()

useEffect(()=>{
    const fetchBookings = async ()=> {
        const response= await fetch('http://localhost:4000/mybookings',{
          headers:{
            'Authorization' : `Bearer ${ admin.authtoken }`
          }
        })

        const json = await response.json()

        if (response.ok){
            // console.log(json)
            dispatch({type:'SET_BOOKINGS', payload: json})
        }
    }

    if ( admin ){
      fetchBookings()
    }

}, [dispatch, admin])

  return (
    <>
    <h1 style={{color:'white', padding:"10px 40px"}}>My Turf Bookings</h1>
    <span style={{display:'flex', }}><h3 style={{color:'white', width:'12%'}}>Search Booking: </h3><input style={{width:'50%'}}/></span>
    <div className='home'>
      <div className='workouts'>
        {bookings && bookings.map((booking)=>(
            <BookingDetails key = {booking._id} booking = {booking} />
        ))}
      </div>
      <BookingForm/>
      <CalenderComponent/>
    </div>
    </>
  )
} 

export default Layout
