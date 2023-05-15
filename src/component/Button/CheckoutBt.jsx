import React from 'react'
import { useSelector } from 'react-redux'
import { IoBagOutline } from "react-icons/io5";

const CheckoutBt = () => {

  const { cardTotalQuantity } = useSelector((state) => state.card);
  return (
    <div className='flex px-3 text-white'>
      <IoBagOutline className="h-10 w-10  px-1  hover:text-violet-400" />

      <div className='bg-violet-500 w-6 h-6 rounded-2xl '>

        <h1 className='text-white font-bold  rounded-3xl to text-center  '> {cardTotalQuantity}</h1>
      </div>
    </div>
  )
}

export default CheckoutBt
