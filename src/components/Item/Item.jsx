import React from 'react';
import { Link } from 'react-router-dom';


const Item = (producto) => {
   
    return (
      
        <div className=" card bg-light mb-3 " key={producto.indice} style={{width: '13rem', margin: '3px'}}>
            <div className="card-header" >{producto.nombre}</div>
              <div className="card-body">
                <img src={producto.img} alt="" width="100%" height="200"/>
                <p className="card-text">Marca: {producto.marca}</p>
                <p className="card-text">Precio: ${producto.precio}</p>
              </div>
              <button type="button" className="btn btn-info">
                <Link className='nav-link' to={"/detalles/" + producto.id}> 
                Ver mas detalles
                </Link>
              </button>
              </div>
              
              
    );
}

export default Item;


