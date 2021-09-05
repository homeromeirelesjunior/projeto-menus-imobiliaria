import React from 'react'
import Title from '../Title/Title'
import ProjetoLogo from '../../Images/projeto.png'

import './Projeto.css'

export default function Projeto() {
    return (
        <>            
            <div className="projeto">
                <Title text="Projeto Imobiliária" />    
                <figure>
                    <img className="logo" src={ProjetoLogo} alt="Projeto Logo" />
                </figure>
            </div>
        </>
    )
}