import {React, useState, useEffect} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {productos} from '../../data/productos'



export const ItemListContainer = () => {
  const [productosList, setProductosList] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const getProducts= () => new Promise( (res,rej) => {setTimeout(()=>{
    res(productos)
}, 2000);})

  
  useEffect (() => {
    getProducts()
    .then(data => {
      setProductosList(data)
      setIsLoading(false);
    })
    .catch(error => {
      console.error(error)
  })
  }, [])
  return (
    isLoading ? <h2>Cargando...</h2> : <div>
        <ItemList productList={productosList}/> 
    </div>
    
    
  )
}
