import React from 'react'
import { FixedNav} from '../Style'
import { Link } from 'react-router-dom'

function NavFx({active, username}) {

  return (
    <div>
      <FixedNav>
        <ul>
          <li className={active === '/dashboard' ? 'active' : ''}>
            <Link to="/dashboard" className="dashboard">
              <span className="icon">
                <i class="fas fa-chart-line"></i>
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>


          <li className={active === '/complaint' ? 'active' : ''}>
            <Link to="/complaint">
              <span className="icon">
                <i class="fas fa-people-carry"></i>
              </span>
              <span className="title">Complaints</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <span className="title">Logout ({username})</span>
            </Link>
          </li>
        </ul>
      </FixedNav>
    </div>
  )
}

export default NavFx
