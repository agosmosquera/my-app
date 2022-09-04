import {React, useState, useEffect} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {productos} from '../../data/productos'



export const ItemListContainer = () => {
  const [productosList, setProductosList] = useState([]);

  const getProducts= () => new Promise( (res,rej) => {setTimeout(()=>{
    res(productos)
}, 2000);})

  
  useEffect (() => {
    getProducts()
    .then(data => setProductosList(productos))
    .catch(error => {
      console.error(error)
  })
  }, [])
  return (
    <ItemList productList={productosList}/>
    
  )
}
