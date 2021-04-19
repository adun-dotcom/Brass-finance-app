import React from 'react'
import { Mylogo } from '../Assets/logo'
import { Link } from 'react-router-dom'
  import { Nav } from './Navbar/Nav'


export function LoginNav({text}){
    return (
      
      <Nav>
        <Link to="/">
          <Mylogo />
        </Link>
        <a href="#" className="link-tag">{text}</a>
      </Nav>
    )
}