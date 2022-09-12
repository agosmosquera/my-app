import React from 'react'
import  {ItemDetalle}  from '../ItemDetalle/ItemDetalle'

export const ItemDetail = ({producto}) => {
  return (
  
    <div style={{display: 'flex', gap: '2rem'}}> 
    {/* luego modifico el style y lo agrego a un css */}
        {
            producto.map(producto => <ItemDetalle key ={producto.id} id ={producto.id} categoria ={producto.categoria} img={producto.img} nombre= {producto.nombre} marca={producto.marca} stock = {producto.stock} precio= {producto.precio} productList={producto} />)
        }
        </div>
  )
}
