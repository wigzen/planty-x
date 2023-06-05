import React from 'react'
import { Link } from 'react-router-dom'
import './nodata.css'
const Nodata = ({ page }) => {
  return (
    <div className="nodata">
      <h1 className="nodata__header"> Your {page} is Empty Go Explore</h1>
      <btn className="btn">
        <Link to="/products">Explore</Link>
      </btn>
    </div>
  )
}

export default Nodata
