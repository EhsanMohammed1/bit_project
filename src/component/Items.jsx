import React from 'react'
import { Data } from "../data"
const Items = (item) => {
  return (
    <>
      <div className='flex pt-20 py-10 justify-center'>
        <h1 className='text-black underline text-2xl font-extrabold tracking-wide uppercase'>Products</h1>
      </div>
      <section

        className="grid grid-cols-4 gap-8 sm:grid-cols-8 lg:grid-cols-12 tails-selected-element px-52 "
        contentEditable="true"
      >

        <div
          className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-gray-100 sm:rounded-xl cursor-pointer border border-violet-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            className="p-3 text-white"

          >
            <img className='w-50 h-56 ' src="https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-13-images/Nimbus-Phone-Case-Cover-For-iPhone-13.png?tr=cm-pad_resize,v-2 " alt="" />

          </div>
          <h4 className="text-xl font-medium text-black">Case &Protector</h4>

        </div>
      </section>
    </>
  )
}

export default Items
