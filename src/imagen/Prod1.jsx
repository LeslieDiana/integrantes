
import { Prod2 } from './Prod2'
import logo from "./photos/logos.png"
import React from 'react'
import './Prod1.css'

function Prod1(props) {
  const img = props.img
  const nombre = props.nombre
  return (
    <div className='Prod1'>
        <div className="top">
          <div className="Prod11">
            <img src={logo} alt="" />
          </div>
        </div>
        <Prod2 img = {img} nombre = {nombre}/>
    </div>
  )
}

export {Prod1}