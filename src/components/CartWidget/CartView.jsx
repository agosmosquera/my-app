import React, {useContext} from 'react';
import {CarritoContext} from '../Context/CarritoContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const CartView = () => {
    const { carrito, precioTotal, limpiar} = useContext(CarritoContext)
  if (carrito.length=== 0){
    return (
        <h1> No hay productos agregados al carrito.{' '}
        <Link to="/">Ver todos los productos</Link>
        </h1>
    )
  }
    return ( 
      
      <div>
         <div className=''>
              {carrito.map((e) => <CartItem key={e.id} item={e} />)}
              <br />
              {`Total:  $ ${precioTotal()}`}
              <br />
              <button className="btn btn-danger" onClick={limpiar}>Vaciar Carrito</button>
              <br />
              <br />
              <Link to="/finalizarCompra" className="btn btn-primary" type="button" >Finalizar compra</Link>
            </div>
        
        </div>

    );
}

export default CartView;
