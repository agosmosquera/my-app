import {React, useState, useEffect} from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {productos} from '../../data/productos'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const getProduct = () => new Promise((res, rej) => {
        setTimeout(() =>res(productos.find(producto => producto.id === 1)), 2000)
    })

    useEffect (() => {
        getProduct()
        .then (res => setItem(res))
    }, [])

    return (
    <div><ItemDetail item={item}/></div>
  )
}

