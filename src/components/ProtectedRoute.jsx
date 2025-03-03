import React ,{ useEffect } from 'react'
import useAuthStore from '../store/authStore'

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    const {isAuthenticated} = useAuthStore((state) => state)
  
    
  return (
    <>
      {isAuthenticated ? children : <Navigate to = '/login'/>}
    </>
  )
}

export default ProtectedRoute