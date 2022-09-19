import {React, useState, useEffect, useContext} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';
// // import  {DarkModeProvider, DarkModeContext}  from './Context/DarkModeContext.jsx';



export const ItemListContainer = () => {
  const [productosList, setProductosList] = useState([]);
  const [loading, setLoading] = useState([true]);
  const {categoria} = useParams();
  // const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  
  useEffect (() => {
    // getProducts()
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
    loading ? <h2>Cargando...</h2> : <div >
        {/* 
        className={darkMode ? 'darkMode' : ''}
        <button className='btn btn-dark' onClick={() => toggleDarkMode()}>Cambiar modo</button> */}
        <ItemList productList={productosList}/> 
    </div>
    
    
  )
}
