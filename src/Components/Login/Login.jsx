import React from 'react'
import Form from '../Form'
import { LoginNav } from '../LoginNav'


export function Login(){
    return(
        <div>
           <LoginNav text="open an account" />
            <Form/>
        </div>
    )
}