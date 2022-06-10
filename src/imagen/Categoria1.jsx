import React from 'react'
import {Prod1} from './Prod1.jsx'
function Categoria1(props) {
    const list =props.list
  return (
    <div className='cat1'>
        
        {list.map((item)=> <Prod1 img={item.img} nombre={item.nombre}/>)}
    </div>
  )
  }

export {Categoria1}