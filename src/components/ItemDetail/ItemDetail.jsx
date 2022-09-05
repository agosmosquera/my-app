import React from 'react'
import {Counter} from '../ItemCount/Counter'
import swal from 'sweetalert';


export const ItemDetail = ({item}) => {
    function onAdd(count){
        swal( '¡Agregado al carrito!', 'Se han seleccionado ' + count + ' productos', 'success' )
      }
  return (
    <div>
        <div className="card bg-light mb-3" key={item.id} style={{maxWidth: '15rem', margin: '5px'}}>
                                 <div className="card-header" >{item.nombre}</div>
                                     <div className="card-body">
                                     <img src={item.img} alt={item.nombre} width="100%" height="200"/>
                                     <p className="card-text">Marca: {item.marca}</p>
                                     <p className="card-text">Precio: ${item.precio}</p>
                                     <p className="card-text">Descripcion: {item.descripcion}</p>
                                  </div>
                                  <div>
                                     <Counter stock={item.stock} onAdd={onAdd}/>
                                 </div>
                             </div>
    </div>
  )
}
