import React, {useContext} from 'react';
import {CarritoContext, CarritoProvider} from '../Context/CarritoContext';
import { Link } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';


const CartView = () => {
    const { carrito, quitarProductoCarrito, precioTotal, limpiar} = useContext(CarritoContext)
  if (carrito.length=== 0){
    return (
        <h1> No hay productos agregados al carrito.{' '}
        <Link to="/">Ver todos los productos</Link>
        </h1>
    )
  }
    return (
      
      <div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
        {carrito.map((item) => 
            <tr key={item.id} className="table-active">                                                    
                <td>{item.nombre}</td>
                <td>{item.cant}</td>
                <td>{item.precio}</td>
                <td><CloseButton onClick={() => quitarProductoCarrito(item.id)} /></td>
            </tr>
                )} 
             <tr>
                {<td colSpan="6"> <p className= "d-flex justify-content-center">  TOTAL: $ { precioTotal()}</p></td>}
             </tr> 
           
              <Link to="/finalizarCompra" className="btn btn-primary" type="button" onClick={()=>limpiar()}>Finalizar compra</Link>
        </tbody>
      </table>
        </div>

    );
}

export default CartView;
