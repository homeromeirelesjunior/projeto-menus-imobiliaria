import React from 'react'
import Title from '../Title/Title'
import MrvLogo from '../../Images/mrv.jpg'

import './Mrv.css'

export default function Mrv() {
    return (
        <>
            <div className="mrv">
                <Title text="MRV Imobiliária" />               
            </div>
            <figure>
                <img className="logo" src={MrvLogo} align="center" alt="Logo MRV" />               
            </figure>          
        </>
    )
}