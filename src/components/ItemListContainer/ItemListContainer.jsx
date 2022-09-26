import {React, useState, useEffect, useContext} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';
import db from '../../services/firebase';
import {collection, getDocs, query, where} from 'firebase/firestore';




export const ItemListContainer = () => {
  const [productosList, setProductosList] = useState();
  const [loading, setLoading] = useState([true]);
  const {categoria} = useParams();
  
  
  // useEffect (() => {
  //   fetch("../json/productos.json")
  //   .then(response => response.json())
  //   .then(data => {setTimeout(()=>{
  //     setProductosList(data)
  //     setLoading(false);
  // }, 2000)})
  //   .catch(error => {
  //     console.error(error)
  // })
  // }, [categoria])
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
  // const getDataCategory = async (category) => {
  //   try {
  //     setLoading(true)
  //     const document = query(collection(db, "Productos"),where("categoria","==",category))
  //     const col = await getDocs(document)
  //     console.log("col.docs",col.docs)
  //     const result = col.doccs.map((doc) => doc ={id:doc.id,...doc.data()})
  //     setProductosList(result)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect (() => {
    getData(categoria)
  }, [categoria])
  return (
    loading ? <h2>Cargando...</h2> : <div >
        
        <ItemList productList={productosList}/> 
    </div>
    
    
  )
}
