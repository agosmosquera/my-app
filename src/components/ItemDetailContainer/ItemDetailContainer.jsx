import {React, useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import {productos} from '../../data/productos';
import { useParams} from 'react';

export const ItemDetailContainer = () => {

    const {id} = useParams()
    
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState([true]);

    const getProduct = () => new Promise((res, rej) => {
        setTimeout(() =>res(productos.find(producto => producto.id === Number(id))), 2000)
    })

    useEffect (() => {
        getProduct()
        .then (data => {
            setItem(data)
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error)})
    }, [])

    return (
        isLoading ? <h2>Cargando...</h2> : <div><ItemDetail item={item}/></div>
  )
}

