import React from 'react'
import Item from '../Item/Item';

export const ItemList = ({productList}) => {
  return (
  <div  className="className='container'">
    <div className="row justify-content-evenly "style={{display: 'flex', gap: '2rem', maxWidth: '1900px', margin: '1rem'}}> 
        {
            productList.map(producto => <Item key ={producto.id} id ={producto.id} categoria ={producto.categoria} img={producto.img} nombre= {producto.nombre} marca={producto.marca} stock = {producto.stock} precio= {producto.precio} productList={producto} />)
        }
        </div>
        </div> 
  )
}