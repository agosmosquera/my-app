import {React, useState, useContext} from 'react'
import {Counter} from '../ItemCount/Counter'
import swal from 'sweetalert';
import {CarritoContext} from '../Context/CarritoContext';
export const ItemDetalle = (producto) => {
  const {agregarProductoCarrito} = useContext(CarritoContext);
  const [compra, setCompra] = useState(false)
    function onAdd(count){
      setCompra(true);
      producto.stock = producto.stock - count;
      agregarProductoCarrito(producto, count);
        swal( '¡Agregado al carrito!', 'Se han seleccionado ' + count + ' productos', 'success' )
      }
  return (
    <div>
        <div className="card bg-light mb-3" key={producto.id} style={{maxWidth: '15rem', margin: '5px'}}>
                                 <div className="card-header" >{producto.nombre}</div>
                                     <div className="card-body">
                                     <img src={producto.img} alt={producto.nombre} width="100%" height="200"/>
                                     <p className="card-text">Marca: {producto.marca}</p>
                                     <p className="card-text">Precio: ${producto.precio}</p>
                                     <p className="card-text">Descripcion: {producto.descripcion}</p>
                                  </div>
                                  <div>
                                     <Counter stock={producto.stock} producto={producto} onAdd={onAdd}/>
                                 </div>
                             </div>
    </div>
  )
}
