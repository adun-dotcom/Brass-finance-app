import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Components/Home/Home'
import NotFound from '../Components/NotFound'
import {Login} from '../Components/Login/Login'
import Welcome from '../Components/Welcome'
const Routes = ()=>{
    return (
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Welcome" component={Welcome} />
        <Route exact path="/" component={Home} />
        <Route exact path="" component={NotFound} />
      </Switch>
    )
}

export default Routes