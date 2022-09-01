// import {React, useState, useEffect} from 'react';

// const productos = [
//     { nombre: 'Fideos', marca: 'Luchet', precio: 150, id: 1, stock: 20 },
//     { nombre: 'Arroz', marca: 'Mandisovi', precio: 130, id: 2, stock: 30 },
//     { nombre: 'Polenta', marca: 'Egran', precio: 170, id: 3, stock: 40 },
//     { nombre: 'Gaseosa', marca: 'Pepsi', precio: 290, id: 4, stock: 50 },
// ]

// function consultarPromesa(confirmacion) {

//     return new Promise ((res,rej) => {
//             if(confirmacion) {
//                 setTimeout(()=>{
//                     res(productos)
//                 }, 2000);
//             } else {
//                 rej("Acceso denegado")
//             }
//     })

// }

// const Productos = () => {

//     const [productos, setProductos] = useState([]);

//     useEffect(() => {
//         consultarPromesa(true)
//         .then(data => {
//             const productosJSX = data.map((producto, indice) =>
//                 <div className="card bg-light mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
//                     <div className="card-header">{producto.nombre}</div>
//                         <div className="card-body">
//                         <p className="card-text">Marca: {producto.marca}</p>
//                         <p className="card-text">Precio: ${producto.precio}</p>
//                         <p className="card-text">Stock: {producto.stock}</p>
//                      </div>
//                 </div>
//             )
//             console.log(productosJSX)
//             setProductos(productosJSX);
//         })
//         .catch(error => {
//             console.error(error)
//         })
    
    
//     }, []);

    
//   return (
//     <div className="row">
//         {productos}
//     </div>
//   );
// }
// export default Productos;
