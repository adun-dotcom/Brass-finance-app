import React, {useEffect, useState} from 'react';
import NavFx from '../Dashboard/NavFixed';
import TopNav from '../MainNav';
import { ComplaintPg, HomeSection } from '../Style';
import {getData} from '../Auth/auth'

function UserComplaint() {
  const [complain, setComplain] = useState([])
  useEffect(async ()=>{
    const data = await getData()
    console.log(data.data)
    setComplain(data.data)
  },[])
    return (
      <ComplaintPg className="home-container">
        <TopNav text="Users Complaint" />
        <NavFx active="/complaint" username="Admin" />
        <HomeSection>
          <div className="home-content">
            <h3>Complaint Management</h3>
            <div className="complain-tb">
              <table>
                <tr>
                  <th>name</th>
                  <th>cost</th>
                  <th>status</th>
                  <th>feedback</th>
                  <th>estimatedHrs</th>
                </tr>
                {complain.map((user) => (
                  <tr>
                    <td>{user.description}</td>
                    <td>{user.cost}</td>
                    <td>{user.status}</td>
                    <td>{user.summary}</td>
                    <td>{user.estimatedHrs}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </HomeSection>
      </ComplaintPg>
    )
}

export default UserComplaint