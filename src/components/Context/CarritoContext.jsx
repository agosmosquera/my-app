import React, {createContext, useState} from 'react';


const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setcarrito] = useState([]);

    
    const agregarProductoCarrito = (producto, cant) => {
        let productoCantidad = { ...producto, cant };
        if (!isInCart(producto.id)) {
            setcarrito([...carrito, productoCantidad]);
        } else {
            
            const newProducts = carrito.map(prod => {
                if(prod.id === producto.id) {
                    const newProduct = {
                        ...producto,
                        cant: producto.cant + cant
                    }
                    return newProduct
                } else {
                    return producto
                }
            })

            setcarrito(newProducts)
        }
    }
    
    const quitarProductoCarrito = (id) => {
        setcarrito( carrito.filter((producto) => producto.id !== id));
        
    };

    const limpiar = () => {
        setcarrito([]);
    };
    const isInCart = (id) => {
        return carrito.some((e) => e.id === id);
    };

    const cantidadArticulosCarrito = () => {
        let cantidad = 0
        carrito.forEach((e) => cantidad += e.cant)
        return cantidad
    };
    const precioTotal = () => {
        let total = 0
        carrito.forEach((e) => total += (e.cant*e.precio))
        return total        
    };
    const cantidadTotal = () => {
             return carrito.reduce((previus, current) => (previus + (current.cant)), 0)
         }

    
    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProductoCarrito, quitarProductoCarrito, limpiar, precioTotal, cantidadArticulosCarrito, cantidadTotal, isInCart}}>
                {props.children} 
            </CarritoContext.Provider>
        </>
    );
}
export {CarritoContext, CarritoProvider}

