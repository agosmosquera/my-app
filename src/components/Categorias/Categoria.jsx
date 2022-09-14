import {React, useState, useEffect} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';


export const Categoria = () => {
  const [productosList, setProductosList] = useState([]);
  const [loading, setLoading] = useState([true]);
  const {categoria} = useParams()

  
  useEffect (() => {
    fetch("../json/productos.json")
    .then(response => response.json())
    .then(data => {setTimeout(()=>{
      setProductosList(data.filter(data=>data.categoria === categoria))
      setLoading(false);
  }, 2000)})
    .catch(error => {
      console.error(error)
  })
  }, [categoria])
  return (
    loading ? <h2>Cargando...</h2> : <div>
        <ItemList productList={productosList}/> 
    </div>
    
    
  )
}
