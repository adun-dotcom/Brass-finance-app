import React from 'react'
import {Finances} from '../Style'

function UserFinance({children, color}){
    return(
        <Finances color={color}>
            {children}
        </Finances>
    )
}

export default UserFinance