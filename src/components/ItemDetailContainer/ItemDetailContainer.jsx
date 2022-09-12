import {React, useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {

    const [producto, setproductoCard] = useState({})
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState([true]);
    const getProduct =() => new Promise((resolve, reject) => {
      setTimeout(() => resolve(producto.find(producto =>producto.id ===Number(id))), 200)
    })
    useEffect(() => {
        fetch("../json/productos.json")
        getProduct()
        .then(response => response.json())
        .then (response => {setTimeout(()=>{
          setproductoCard(response)
          setIsLoading(false);
      }, 200)})
        .catch(error => {
            console.error(error)})
    }, [id])
    

    return (
      isLoading ? <h2>Cargando...</h2> : <div>
        <ItemDetail item={producto}/> 
    </div>
        )
}

