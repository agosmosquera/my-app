import {React, useState, useEffect} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';




export const ItemListContainer = () => {
  const [productosList, setProductosList] = useState([]);
  const [loading, setLoading] = useState([true]);
  const {categoria} = useParams()
  

  const getProducts= () => new Promise( (res,rej) => {
    if(categoria){
      setTimeout(()=>{
    res(res.filter(item=>item.categoria === categoria))
}, 2000)} else {
  setTimeout(()=>res(res), 2000)
}
    })

  
  useEffect (() => {
    getProducts()
    fetch("../json/productos.json")
    .then(response => response.json())
    .then(data => {setTimeout(()=>{
      setProductosList(data)
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
