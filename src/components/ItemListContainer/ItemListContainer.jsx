import React from 'react'
import { FcMoneyTransfer } from 'react-icons/fc';
import {Counter} from '../ItemCount/Counter'
import swal from 'sweetalert';

export const ItemListContainer = ({title}) => {
    
  function onAdd(count){
      swal( '¡Agregado al carrito!', 'Se han seleccionado ' + count + ' productos', 'success' )
    }
    return (
    <div>
      <h1>{title}</h1>
    <FcMoneyTransfer className='money'/>
    <div>
      <Counter stock={5} onAdd={onAdd}/>
    </div>
    </div>
  )
}
