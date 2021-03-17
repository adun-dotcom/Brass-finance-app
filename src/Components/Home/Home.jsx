import React from 'react'
import {Nav} from '../Navbar/Nav'
import {Content} from '../Content/Content'
import { Button } from '../Button/Button'
import { Mylogo } from '.././Assets/logo'
import { Link } from 'react-router-dom'

 const Home = ()=>{
     return (
       <>
         <Nav>
           <Link to="/">
             <Mylogo />
           </Link>

           <Link to="/Login">
             <Button btnText="Login" btnText="Log in"/>
           </Link>
         </Nav>
         <Content />
       </>
     )
 }

 export default Home