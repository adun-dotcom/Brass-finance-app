import React from 'react'
import { HomeSection } from '../Style'
import UserFinance from './Finance'
import NavFx from './NavFixed'
import TopNav from '../MainNav'

function Wellcome(){
    return (
      <div className="home-container">
       <TopNav text="Welcome to your Dashboard"/>
        <NavFx active="/dashboard" username={'Admin'}/>
        <HomeSection>
          <div className="home-content">
            <div className="wide-side">
              <div className="flexed-div">
                <UserFinance>
                  <p>Total Income</p>
                  <h3>$ 579,000</h3>
                  <small>saved 25%</small>
                </UserFinance>
                <UserFinance color="#a9def9">
                  <p>Total Expenses</p>
                  <h3>$ 79,000</h3>
                  <small>saved 25%</small>
                </UserFinance>
                <UserFinance color="#8338ec">
                  <p>Cash on Hand</p>
                  <h3>$ 92,000</h3>
                  <small>saved 25%</small>
                </UserFinance>
                <UserFinance color="#02c39a">
                  <p>Net profit margin</p>
                  <h3>$ 179,000</h3>
                  <small>saved 65%</small>
                </UserFinance>
              </div>
            </div>
          </div>
        </HomeSection>
      </div>
    )
}

export default Wellcome

