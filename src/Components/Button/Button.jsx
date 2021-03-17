import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonTag} from '../Style'


export function Button({btnText,  width, padding }){
    return (
      <ButtonTag btnWidth={width} padding={padding} >
       {btnText}
      </ButtonTag>
    )
}