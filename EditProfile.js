import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {

    let navigate = useNavigate()
    const handleSubmit = async(e) => { navigate('/profile')}

  return (
    <div>
      <div>
      <form action="" className="create" >
        <h2> Edit Details </h2>
        <label>Name: </label>
        <input
          type="text"
          style={{width:'300px'}}
        //   onChange={(e) => setBookername(e.target.value)}
        //   value={bookerName}
        //   className={emptyFields.includes('bookerName')? 'error':''}
        />

        <label>Username: </label>
        <input
          type="text"
          style={{width:'300px'}}
        //   onChange={(e) => setBookeramount(e.target.value)}
        //   value={bookerAmount}
        //   className={emptyFields.includes('bookerAmount')? 'error':''}
        />

        <label>Email: </label>
        <input
          type="text"
          style={{width:'300px'}}
        //   onChange={(e) => setBookeramount(e.target.value)}
        //   value={bookerAmount}
        //   className={emptyFields.includes('bookerAmount')? 'error':''}
        />

        <label>Phone: </label>
        <input
          type="tel"
          style={{width:'300px'}}
        //   onChange={(e) => setBookerDate(e.target.value)}
        //   value={bookerDate}
        //   className={emptyFields.includes('bookerDate')? 'error':''}
        />

        

        <button onClick={handleSubmit}>Submit</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
    </div>
  )
}

export default EditProfile
