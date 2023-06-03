import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Forms from '../Form/Forms'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const { islogedin } = useContext(AuthContext)
  return (
    <>
      {islogedin
        ? { children }
        : 'hehehehe'
          // <Navigate to="/login" state={{ from: 'location' }} />
      }
    </>
  )
}

export default RequireAuth
