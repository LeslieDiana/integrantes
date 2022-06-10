import React from 'react'
import {cardlist} from './fotos.js'
import {Categoria1} from './Categoria1'
function Producto() {
  return (
    <div>
        <Categoria1 list={cardlist}/>
    </div>
  )
}

export {Producto}