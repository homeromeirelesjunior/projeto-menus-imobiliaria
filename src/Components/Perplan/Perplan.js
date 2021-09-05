import React from 'react'
import Title from '../Title/Title'
import PerplanLogo from '../../Images/perplan-final.png'

import './Perplan.css'

export default function Perplan() {
    return (
        <>            
            <div className="perplan">
              <Title text="Perplan Imobiliária" />
              <figure>
                  <img className="logo" src={PerplanLogo} alt="Perplan Logo" />
              </figure>
            </div>
        </>
    )
}