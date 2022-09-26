import React, {useContext} from 'react';
import { CarritoContext } from './Context/CarritoContext';
import swal from 'sweetalert';

const FinalizarCompra = () => {
    function finCompra() {

        swal( ' Gracias por comprar en Despensa Punto Sur', 'success')
    }
    return (
        <>
        finCompra()
        </>
    );
}

export default FinalizarCompra;