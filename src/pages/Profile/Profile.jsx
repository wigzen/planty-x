import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../../components'
import { Address } from '../../components/Form/Forms'
import './profile.css'
const Profile = () => {
  const { handleLogout, userData, removeAddress, addresss } =
    useContext(AuthContext)
  const { modalOpen, close, open } = useModal()

  const [updateform, setUpdateform] = useState({
    state: false,
    ID: '',
    data: {},
  })
  const navigate = useNavigate()
  useEffect(() => {}, [userData])
  console.log(addresss, '<--profile address')
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
          {addresss?.map((ele) => {
            return (
              <div className="address-card">
                <div className="icon-div">
                  <AiOutlineCloseCircle
                    size={18}
                    onClick={() => {
                      removeAddress(ele)
                    }}
                  />
                  <AiOutlineEdit
                    size={18}
                    onClick={() => {
                      setUpdateform(() => {
                        return {
                          state: true,
                          ID: ele._id,
                          data: ele,
                        }
                      })
                      modalOpen ? close() : open()
                    }}
                  />
                </div>
                <p>{ele.name}</p>
                <p>{ele.street}</p>
                <p>{ele.city}</p>
                <p>{ele.state}</p>
                <p>{ele.country}</p>
              </div>
            )
          })}
          <button
            className="btn"
            onClick={() => {
              setUpdateform(() => {
                return {
                  state: true,
                  ID: '',
                }
              })

              modalOpen ? close() : open()
            }}
          >
            {' '}
            Add address
          </button>
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

      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          Component={() =>
            updateform.state ? (
              <Address
                ID={updateform.ID}
                state={updateform.data}
                update={true}
              />
            ) : (
              <Address />
            )
          }
        />
      )}
    </section>
  )
}

export default Profile
