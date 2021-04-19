import { Mylogo } from '../Assets/logo'
import { Link } from 'react-router-dom'
import React from 'react'

function TopNav({ text }) {
  return (
    <div className="dashboard-nav">
      <div className="home-logo">
        <Link to="/">
          <Mylogo />
        </Link>
      </div>
      <div className="nav-title">
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default TopNav
