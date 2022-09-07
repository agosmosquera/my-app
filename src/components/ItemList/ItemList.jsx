import React from 'react'
import Item from '../Item/Item';

export const ItemList = ({productList}) => {
  return (
  
    <div style={{display: 'flex', gap: '2rem'}}> 
    {/* luego modifico el style y lo agrego a un css */}
        {
            productList.map(producto => <Item key ={producto.id} img={producto.img} nombre= {producto.nombre} marca={producto.marca} stock = {producto.stock} precio= {producto.precio} productList={producto} />)
        }
        </div>
  )
}