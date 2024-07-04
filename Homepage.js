import React from 'react';
// import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Layout = () => {

    const { admin, user } = useAuthContext()

  return (
    <div className='mainlayoutsec'>

            {admin && (
            <h1>Welcome To Turfy, <strong>{ admin.name }</strong></h1>
            )}

            {(!admin && user) && ( 
                <h1>Welcome To Turfy, <strong>{ user.name }</strong></h1>
            )}

            {(!admin && !user) && ( 
                <h1>Welcome To Turfy</h1>
            )}

            
    </div>
  )
}

export default Layout
