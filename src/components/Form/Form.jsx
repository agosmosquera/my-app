import { addDoc, collection} from 'firebase/firestore';
import React, {useState, useContext} from 'react';
import { CarritoContext } from '../Context/CarritoContext';
import db from "../../services/firebase"
import './Form.css'

const Form = () => {
  const {carrito, cantidadTotal, limpiar} = useContext(CarritoContext);
    const [orderId, setOrderId] = useState();
    const [comprador, setComprador] = useState({
        nombre: "",
        email: "",
        telefono: ""
    }); 
    
    const {nombre,email,telefono} = comprador
    const generateOrder = async(data) =>{
      try {
        const col = collection(db, "Orders")
        const order = await addDoc(col, data)
        setOrderId(order.id)
        limpiar()
      } catch (error) {
        console.log(error)
      }
    }

    const handleInputChange = (e) => {
      setComprador(({
        ...comprador,
        [e.target.name] : e.target.value 
      }))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      const items = carrito.map(e=>{return {id:e.id, nombre:e.nombre, marca:e.marca, precio:e.precio, cantidad: e.cant}})
      const dia = new Date() 
      const total = cantidadTotal()
      const data = {comprador, items, dia, total}
      generateOrder(data)

    }
    
    
   

    return (
        <>
        <h2 className='ancho'>Finalizando compra </h2>
        <hr />
        {!orderId? <div>  
        <h4 className='ancho'>Completar datos:</h4>
        <form className='row mb-3 ancho' onSubmit={handleSubmit}>
              <input className='input'
              type="text" 
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={handleInputChange}
          />
              <input 
              className='input'
              type="text" 
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              />
              <input 
              className='input'
              type="number" 
              name="telefono"
              placeholder="Telefono"
              value={telefono}
              onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-primary input">Finalizar compra</button>
              </form> </div>  : <h2 className='ancho' >Su orden de compra es: {orderId} </h2> }
        </>
    );
}

export default Form;
