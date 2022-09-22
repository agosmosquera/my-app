import {React, useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../services/firebase';


export const ItemDetailContainer = () => {

    const [producto, setproductoCard] = useState()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    
    
    // useEffect(() => {
    //   // getProduct()
    //   fetch("../json/productos.json")
    //     .then(response => response.json())
    //     .then (response => {setTimeout(()=>{
    //       setproductoCard(response.find(response =>response.id ===Number(id)))
    //       setIsLoading(false)
    //   }, 2000)})
    //     .catch(error => {
    //         console.error(error)})
    // }, [id])
    const getSelected = async(idItem) => {
      try {
  const document = doc(db, "Productos", idItem)
  const response = await getDoc(document)
  const result = {id: response.id, ...response.data()}
  setproductoCard(result)
  setIsLoading(false)
 } catch (error) {
  console.log(error)
 }
    }
    useEffect(() => {
      getSelected(id)
    }, [id])
    

    return (
      isLoading ? <h2>Cargando...</h2> : <div>
        <ItemDetail item={producto}/> 
    </div>
        )
}

