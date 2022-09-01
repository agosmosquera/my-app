import {React, useState, useEffect} from 'react';
import fideos from '../../img/fideos.jpg'
import arroz from '../../img/arroz.jpg'
import galletas from '../../img/galletas.jpg'
import coca from '../../img/coca.jpg'


const misProductos = [
    { nombre: 'Fideos', marca: 'Luchet', precio: 150, id: 1, stock: 20, img: fideos },
    { nombre: 'Arroz', marca: 'Mandisovi', precio: 130, id: 2, stock: 30, img: arroz },
    { nombre: 'Galletas', marca: 'Bagley', precio: 310, id: 3, stock: 40, img: galletas },
    { nombre: 'Gaseosa', marca: 'Pepsi', precio: 290, id: 4, stock: 50, img: coca },
]

function consultarPromesa(confirmacion) {

    return new Promise ((res,rej) => {
            if(confirmacion) {
                setTimeout(()=>{
                    res(misProductos)
                }, 2000);
            } else {
                rej("Acceso denegado")
            }
    })

}

const Productos = () => {

    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
            const productosJSX = data.map((producto, indice) =>
                <div className="card bg-light mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
                    <div className="card-header" >{producto.nombre}</div>
                        <div className="card-body">
                        <img src={producto.img} alt="" width="100%" height="200"/>
                        <p className="card-text">Marca: {producto.marca}</p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                     </div>
                </div>
            )
            // console.log(productosJSX)
            setProductos(productosJSX);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error)
        })
    
    
    }, []);

    
  return (
    isLoading ? <h2>Cargando...</h2> : <div className="row">
        {productos}
    </div>
  );
}
export default Productos;