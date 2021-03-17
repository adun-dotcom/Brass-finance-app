import React from 'react'
import { Mylogo } from '.././Components/Assets/logo'
import { Link } from 'react-router-dom'
import {NavTag} from './Style'


export function LoginNav({text}){
    return (
      <NavTag>
        <Link to="/">
          <Mylogo />
        </Link>
        <a href="#" className="link-tag">{text}</a>
      </NavTag>
    )
}