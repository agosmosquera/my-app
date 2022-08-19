import React from 'react'
import { FcMoneyTransfer } from 'react-icons/fc';

export const ItemListContainer = ({title}) => {
  
    return (
    <div>
      <h1>{title}</h1>
    <FcMoneyTransfer className='money'/>
    </div>
  )
}
