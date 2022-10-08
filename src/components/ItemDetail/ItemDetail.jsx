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
  
  <div className='container detailsStyle card mb-3' >
            <h1 className='text-center titleStyle' >{item.nombre}</h1>
            <div className='row'>
                <div className='col' >
                    <img src={item.img} className='rounded mx-auto d-block img_med' alt={item.nombre} key={item.id} style={{maxWidth: '25rem', margin: '1px'}}/>
                </div>
                <div className='col'>
                    <h3>Marca: {item.marca}</h3>
                    <br />
                    <h3>DESCRIPCION:</h3>
                    <p>{item.descripcion}</p>
                    <br />
                    <h3>PRECIO: ${item.precio}</h3>
                   
                    
                    {compra ? (<Link to="/cart" className="btn btn-success" type="button" style={{width: '20rem', height: '3rem',  margin: '1px'}}>
                Ver carrito
                 </Link>
                ) : <Counter stock={item.stock} producto={item} onAdd={onAdd}/> 
                 }
                    
                </div>
            </div>
        </div>
)
}
