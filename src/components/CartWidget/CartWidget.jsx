import React, {useContext} from 'react'
import { BiCart } from 'react-icons/bi';
import { CarritoContext } from "../Context/CarritoContext";
import Button from "react-bootstrap/Button";
import CartView from './CartView'; 
import { Link } from 'react-router-dom';


export const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div>
      <Button >
                <Link className='nav-link' to={"/cart"}> 
                <BiCart className='icon'/> 
                {cantidadTotal()}
                </Link>
      </Button>
      </div>
  )
}
