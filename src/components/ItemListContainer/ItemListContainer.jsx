import {React, useState, useEffect, useContext} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';
import db from '../../services/firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';




export const ItemListContainer = () => {
  const [productosList, setProductosList] = useState();
  const [loading, setLoading] = useState([true]);
  const {categoria} = useParams();
  
  

  const getData = async (category) => {
    try {
      setLoading(true)
      const document = categoria ? query(collection(db, "Productos"), where("categoria","==",category))
      : collection(db, "Productos")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc ={id: doc.id, ...doc.data() })
      setProductosList(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect (() => {
    getData(categoria)
  }, [categoria])
  return (
    loading ? <h2>Cargando...</h2> : <div >
        
        <ItemList productList={productosList}/> 
    </div>
    
    
  )
}
