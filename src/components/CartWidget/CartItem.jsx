import React, { useContext } from 'react'
import {CarritoContext} from '../Context/CarritoContext';

const CartItem = ({item}) => {
 

    const {quitarProductoCarrito} = useContext(CarritoContext)
 
    return (
        
            <div className='card mb-3 row' style={{maxWidth: '500px'}}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={item.img} className='img-fluid rounded-start' alt={item.nombre}/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.nombre} {item.marca}</h5>
                            <p className='card-text'>Cantidad: {item.cant}</p>
                            <p className='card-text'>Precio unitario: {item.precio}</p>
                            <p className='card-text'>Precio: {item.precio * item.cant}</p>
                            <button className='btn btn-warning' onClick={()=>quitarProductoCarrito(item.id)}>Eliminar Producto</button>
                        </div>

                    </div>
                </div>
            </div>
               
        
    )
}

export default CartItem