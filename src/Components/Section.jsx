import React from 'react'
export function Section({clsName, children}){
    return(
        <section className={clsName}>
            {children}
        </section>
    )
}