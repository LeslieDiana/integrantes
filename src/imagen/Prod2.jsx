import './Prod2.css'
import React from 'react'

function Prod2(props) {
  const nombre = props.nombre
  const img = props.img
  return (
    <div className="prod2">
        <img src={img} alt="" />
        <div className="bu">
          <div className="Prod21">
              <span>{nombre}</span>
          </div>
        </div> 
    </div>
  )
}

export {Prod2}