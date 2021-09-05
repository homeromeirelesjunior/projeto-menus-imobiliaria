import React from 'react'
import Title from '../Title/Title'
import PacaembuHeader from './PacaembuHeader'
import PacaembuLogo from '../../Images/pacaembu.png'

import './Pacaembu.css'

export default function Pacaembu() {
    return (
        <>
            <PacaembuHeader />            
            <div className="pacaembu">
                <Title text="Pacaembu Construtora" />
                <figure>
                    <img className="logo" src={PacaembuLogo} alt="Pacaembu Logo" />
                </figure>
            </div>
        </>
    )
}