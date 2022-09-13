import React from 'react'
import  {ItemDetalle}  from '../ItemDetalle/ItemDetalle'

export const ItemDetail = ({setproductoCard}) => {
  
  return (
  
    <div style={{display: 'flex', gap: '2rem'}}> 
    {/* luego modifico el style y lo agrego a un css */}
        {
            setproductoCard.map(setproductoCard => <ItemDetalle key ={setproductoCard.id} id ={setproductoCard.id} categoria ={setproductoCard.categoria} img={setproductoCard.img} nombre= {setproductoCard.nombre} marca={setproductoCard.marca} stock = {setproductoCard.stock} precio= {setproductoCard.precio} productList={setproductoCard} />)
        }
        </div>
  )
}
