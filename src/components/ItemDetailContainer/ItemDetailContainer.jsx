import {React, useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {

    const [producto, setproductoCard] = useState({})
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    
    // const getProduct =() => new Promise((resolve, reject) => {
    //   setTimeout(() => resolve(producto.find(producto =>producto.id ===Number(id))), 2000)
    //   })
//       if (id) {
//         setTimeout(() => {
//           resolve(producto.find(producto =>producto.id === Number(id)))}, 2000)} else {
//             setTimeout(()=>resolve(resolve), 2000)
// }
    
    useEffect(() => {
      // getProduct()
      fetch("../json/productos.json")
        .then(response => response.json())
        .then (response => {setTimeout(()=>{
          setproductoCard(response.find(response =>response.id ===Number(id)))
          setIsLoading(false)
      }, 2000)})
        .catch(error => {
            console.error(error)})
    }, [id])
    

    return (
      isLoading ? <h2>Cargando...</h2> : <div>
        <ItemDetail item={producto}/> 
    </div>
        )
}

