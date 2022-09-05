import React from 'react';
import {Counter} from '../ItemCount/Counter'
import swal from 'sweetalert';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { ItemList } from '../ItemList/ItemList';

  function onAdd(count){
    swal( '¡Agregado al carrito!', 'Se han seleccionado ' + count + ' productos', 'success' )
  }

const Item = (productList) => {
    return (
        <div className="card bg-light mb-3" key={productList.id} style={{maxWidth: '15rem', margin: '5px'}}>
                                 <div className="card-header" >{productList.nombre}</div>
                                     <div className="card-body">
                                     <img src={productList.img} alt="{`Imagen del producto ${nombre} `}" width="100%" height="200"/>
                                     <p className="card-text">Precio: ${productList.precio}</p>
                                     <p className="card-text">Marca: {productList.marca}</p>
                                  </div>
                                  <div>
                                     <button type="button" className="btn btn-info" >Ver mas detalles</button>
                                 </div>
                             </div>
    );
}

export default Item;
