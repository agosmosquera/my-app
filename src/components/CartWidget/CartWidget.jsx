import React, {useContext} from 'react'
import { BiCart } from 'react-icons/bi';
import { CarritoContext } from "../Context/CarritoContext";
import Button from "react-bootstrap/Button";


export const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div>
      <Button >
      <BiCart className='icon'/> 
      {cantidadTotal()}
      </Button>
      </div>
  )
}
