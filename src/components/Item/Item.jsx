import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({productList}) => {
  const {nombre, img, precio, marca, id} = productList
    return (
        <div className="card bg-light mb-3" key={id} style={{maxWidth: '15rem', margin: '5px'}}>
            <div className="card-header" >{nombre}</div>
              <div className="card-body">
                <img src={img} alt="" width="100%" height="200"/>
                <p className="card-text">Marca: {marca}</p>
                <p className="card-text">Precio: ${precio}</p>
              </div>
              <Link to={`/detalles/${id}`}> 
                 <button type="button" className="btn btn-info" >Ver mas detalles</button>
              </Link>
        </div>
    );
}

export default Item;
