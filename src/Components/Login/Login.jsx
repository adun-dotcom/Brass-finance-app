import React from 'react'
import AppLogin from '../UserLogin'
import { LoginNav } from '../LoginNav'


export function Login(){
    return(
        <div>
           <LoginNav text="open an account" />
            <AppLogin/>
        </div>
    )
}