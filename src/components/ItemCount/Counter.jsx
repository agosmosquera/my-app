import {useState} from 'react'
import useCounter from './useCounter'
import './counter.css';

export const Counter = ({stock, onAdd}) => {
    const {add, substract, reset, count} = useCounter(stock)
return (
<div>
    <div className='card text-white bg-primary mb-3 mi-card'>
        <div> 
            <p>Stock: {stock}</p>
            <p>Cantidad: {count}</p>
        </div>
        <div className='card-body'>
            <button  className='btn btn-light' onClick={substract}>-</button>
            <button  className='btn btn-secondary' onClick={reset}>Reset</button>
            <button  className='btn btn-light' onClick={add}>+</button>
        </div>
        <div className='card-text '>
            <button className='btn btn-info confirmar' onClick={() => onAdd(count)}>Confirmar</button>
        </div>
    </div>
</div>
)
}