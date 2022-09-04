import React from 'react';
import {Counter} from '../ItemCount/Counter'
import swal from 'sweetalert';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';

  function onAdd(count){
    swal( '¡Agregado al carrito!', 'Se han seleccionado ' + count + ' productos', 'success' )
  }
  function detalles(){
    <ItemDetailContainer />
  }

const Item = ({
    nombre = 'Fideos',
    img = 'https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/fettuccine.png.webp',
    marca = 'Lucheti',
    precio = 150,
    stock = 20,
    id = 1

}) => {
    return (
        <div className="card bg-light mb-3" key={id} style={{maxWidth: '15rem', margin: '5px'}}>
                                 <div className="card-header" >{nombre}</div>
                                     <div className="card-body">
                                     <img src={img} alt="{`Imagen del producto ${nombre} `}" width="100%" height="200"/>
                                     <p className="card-text">Precio: ${precio}</p>
                                     <p className="card-text">Marca: {marca}</p>
                                  </div>
                                  <div>
                                     <Counter stock={stock} onAdd={onAdd}/>
                                     <button type="button" className="btn btn-secondary" onAdd={detalles}>Ver mas detalles</button>
                                 </div>
                             </div>
    );
}

export default Item;
