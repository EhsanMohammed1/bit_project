import React from 'react'
import { useSelector } from 'react-redux'
const CheckoutBt = () => {

  const { cardTotalQuantity } = useSelector((state) => state.card);
  return (
    <div className='flex px-3 text-white'>
      <svg
        className="h-10 w-10  px-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <div className='bg-violet-500 w-6 h-6 rounded-2xl '>

        <h1 className='text-white font-bold  rounded-3xl to text-center  '> {cardTotalQuantity}</h1>
      </div>
    </div>
  )
}

export default CheckoutBt
