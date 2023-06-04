import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai'
import './profile.css'
const Profile = () => {
  const { handleLogout, userData } = useContext(AuthContext)
  const navigate = useNavigate()
  //   console.log(userData)
  return (
    <section className="profile-section">
      <h1 className="page-header">Profile</h1>
      <div className="profile">
        <div>
          <h2 className="sub-header">User info</h2>
          <p>Name : {`${userData.firstName} ${userData.lastName}`}</p>
          <p>Email :{userData.email}</p>
        </div>
        <div>
          <h2 className="sub-header"> Address</h2>
          {userData.address.map((ele) => {
            return (
              <div className="address-card">
                <div className="icon-div">
                  <AiOutlineCloseCircle size={18} />
                  <AiOutlineEdit size={18} />
                </div>
                <p>{ele.name}</p>
                <p>{ele.street}</p>
                <p>{ele.city}</p>
                <p>{ele.state}</p>
                <p>{ele.country}</p>
              </div>
            )
          })}
          <button className="btn"> Add address</button>
        </div>
      </div>
      <button
        onClick={() => {
          handleLogout()
          navigate('/')
        }}
        className="btn"
      >
        Logout
      </button>
    </section>
  )
}

export default Profile
