// import {React, useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';

// export const Inicio = () => {
//     const [productos, setproductos] = useState([]); 
//  useEffect(() => {
//   fetch("../json/productos.json")
//   .then(response => response.json())
//   .then(data => {
//     const productosCard = data.map((producto, indice) => 
//     <div className="card bg-light mb-3 }" key={indice} style={{maxWidth: '15rem', margin: '3px'}}>
//             <div className="card-header" >{producto.nombre}</div>
//               <div className="card-body">
//                 <img src={"./img/" + producto.img} alt="" width="100%" height="200"/>
//                 <p className="card-text">Marca: {producto.marca}</p>
//                 <p className="card-text">Precio: ${producto.precio}</p>
//               </div>
//               <button type="button" className="btn btn-info">
//                 <Link className='nav-link' to={"/detalles/" + producto.id}> 
//                 Ver mas detalles
//                 </Link>
//               </button>
//               </div>
//     )
//     setproductos(productosCard)
//   });

//  }, []);
//     return (
//         <>
//            {productos}
//         </>
//     );
// }



