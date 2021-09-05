import React from 'react'
import Title from '../Title/Title'
import ParraLogo from '../../Images/parra.png'

import './Parra.css'

export default function Parra() {
    return (
        <>            
            <div className="parra">
                <Title text="Imobiliária Parra" />
                <figure>
                    <img className="logo" src={ParraLogo} alt="Parra Logo" />
                </figure>
            </div>
        </>
    )
}