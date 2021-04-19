import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NotFound from '../Components/NotFound'
import {Login} from '../Components/Login/Login'
import Wellcome from '../Components/Dashboard'
import HomePg from '../Components/Home'
import UserComplaint from '../Components/Complaints'
const Routes = ()=>{
    return (
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/dashboard" component={Wellcome} />
        <Route exact path="/" component={HomePg} />
        <Route exact path="/complaint" component={UserComplaint} />
        <Route exact path="*" component={NotFound} />
      </Switch>

      
    )

  
  
}

export default Routes