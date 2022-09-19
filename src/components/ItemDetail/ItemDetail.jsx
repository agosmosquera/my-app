import React, {useState, useContext } from 'react'
import  {ItemDetalle}  from '../ItemDetalle/ItemDetalle'
import {Counter} from '../ItemCount/Counter'
import swal from 'sweetalert';
import { CarritoContext } from '../Context/CarritoContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({item}) => {
  const {agregarProductoCarrito} = useContext(CarritoContext)
  const [compra, setCompra] = useState(false)
  function onAdd(count){
    setCompra(true);
    item.stock = item.stock - count;
    agregarProductoCarrito(item, count);
      swal( '¡Agregado al carrito!', 'Se han seleccionado ' + count + ' productos', 'success' )
    }
return (
  <div>
      <div className="card bg-light mb-3" key={item.id} style={{maxWidth: '15rem', margin: '5px'}}>
                               <div className="card-header" >{item.nombre}</div>
                                   <div className="card-body">
                                   <img src={`../img/${item.img}`} alt={item.nombre} width="100%" height="200"/>
                                   <p className="card-text">Marca: {item.marca}</p>
                                   <p className="card-text">Precio: ${item.precio}</p>
                                   <p className="card-text">Descripcion: {item.descripcion}</p>
                                </div>
                                {compra ? (<Link to="/cart" className="btn btn-dark" type="button">
                Ver carrito
                </Link>
                ) : <Counter stock={item.stock} producto={item} onAdd={onAdd}/> 
                }
                               
                           </div>
  </div>
)
}
