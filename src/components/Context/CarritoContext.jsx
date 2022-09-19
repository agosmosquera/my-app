import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setcarrito] = useState([]);

    const agregarProductoCarrito = (producto, cant) => {
        if(isInCart(producto.id)){
            setcarrito(carrito.map(product=>{
                return producto.id === producto.id ? {...producto, cant: producto.cant + 1, stock: producto.stock - cant} : producto
            })); 
        }else{
            setcarrito([...carrito, {...producto, cant}]) 
        }
        // const auxCarrito = carrito
        // auxCarrito.push(producto)
        // setcarrito(auxCarrito);
    }
    const isInCart = (id) => carrito.find(producto => producto.id === id) ? true : false;

    const quitarProductoCarrito = (id) => {
        setcarrito(carrito.filter(item => item.id !== id));
        // const auxCarrito = carrito
        // let indice = auxCarrito.findIndex(producto => producto.id === producto.id)
        // auxCarrito.splice(indice, 1)
        // setcarrito(auxCarrito);
    }
    const limpiar = () =>{
        setcarrito([]);
    }
    const precioTotal = () => {
        return carrito.reduce((previus, current) => (previus + (current.cant * current.precio)), 0)
    }
    const cantidadTotal = () => {
        return carrito.reduce((previus, current) => (previus + (current.cant)), 0)
    }
    const cantidadArticulosCarrito = () => {
            return (carrito.length)
    }
    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProductoCarrito, quitarProductoCarrito, limpiar, precioTotal, cantidadArticulosCarrito, cantidadTotal}}>
                {props.children} 
            </CarritoContext.Provider>
        </>
    );
}
export {CarritoContext, CarritoProvider}

