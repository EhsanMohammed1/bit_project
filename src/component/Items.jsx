import React from 'react'
import { PRODUCT } from "../data"


const Items = () => {
  const cardItem = (item) => {
    return (
      <div>
        <div
          className="grid p-4 justify-between  bg-white sm:rounded-[8px] cursor-pointer border border-violet-600 ">
          <div
            className=" text-white" >
            <img src={item.img} alt="card" />

          </div>

          <h4 className="text-xl font-[600] text-black">{item.brand}</h4>
          <h4 className="text-xl font-[500] text-black">{item.name}</h4>
          <h4 className="text-l font-[400] text-black">{item.price}$</h4>

        </div>


      </div>
    )
  }
  return (
    <>
      <div className='flex justify-center p-8'>
        <h1 className='text-black underline   font-extrabold tracking-wide uppercase'>Products</h1>
      </div>

      <section

        className="grid gap-4 lg:grid-cols-6  p-10 "
        contentEditable="true" >

        {PRODUCT.map(cardItem)}
      </section>
    </>
  )
}

export default Items
