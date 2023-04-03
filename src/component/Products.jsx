/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react'

const Products = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 py-8  ">
        <a
          href="#"
          className="relative rounded-lg overflow-hidden border border-red-500  " >
          <img
            alt="Card image"
            className=" "
            src="https://freepngimg.com/save/33095-phone-case-transparent/680x743"
          />
          <div className="absolute bottom-0 w-full h-16 bg-white opacity-75 flex items-center justify-center">
            <h2 className="text-gray-900 font-bold text-lg">Card Header</h2>
          </div>
        </a>
        <a
          href="#"
          className="relative rounded-lg overflow-hidden border border-red-500 mb-4 md:mb-0 md:mr-4"
        >
          <img
            alt="Card image"
            className="object-cover object-center w-full h-48 block"
            src="https://via.placeholder.com/640x360.png?text=Card+Image"
          />
          <div className="absolute bottom-0 w-full h-16 bg-white opacity-75 flex items-center justify-center">
            <h2 className="text-gray-900 font-bold text-lg">Card Header</h2>
          </div>
        </a>
        <a
          href="#"
          className="relative rounded-lg overflow-hidden border border-red-500 mb-4 md:mb-0"
        >
          <img
            alt="Card image"
            className="object-cover object-center w-full h-48 block"
            src="https://via.placeholder.com/640x360.png?text=Card+Image"
          />
          <div className="absolute bottom-0 w-full h-16 bg-white opacity-75 flex items-center justify-center">
            <h2 className="text-gray-900 font-bold text-lg">Card Header</h2>
          </div>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <a
          href="#"
          className="relative rounded-lg overflow-hidden border border-red-500 mt-4 md:mt-0 md:mr-4"
        >
          <img
            alt="Card image"
            className="object-cover object-center w-full h-48 block"
            src="https://via.placeholder.com/640x360.png?text=Card+Image"
          />
          <div className="absolute bottom-0 w-full h-16 bg-white opacity-75 flex items-center justify-center">
            <h2 className="text-gray-900 font-bold text-lg">Card Header</h2>
          </div>
        </a>
        <a
          href="#"
          className="relative rounded-lg overflow-hidden border border-red-500 mt-4 md:mt-0 md:mr-4"
        >
          <img
            alt="Card image"
            className="object-cover object-center w-full h-48 block"
            src="https://via.placeholder.com/640x360.png?text=Card+Image"
          />
          <div className="absolute bottom-0 w-full h-16 bg-white opacity-75 flex items-center justify-center">
            <h2 className="text-gray-900 font-bold text-lg">Card Header</h2>
          </div>
        </a>
        <a
          href="#"
          className="relative rounded-lg overflow-hidden border border-red-500 mt-4 md:mt-0"
        >
          <img
            alt="Card image"
            className="object-cover object-center w-full h-48 block"
            src="https://via.placeholder.com/640x360.png?text=Card+Image"
          />
          <div className="absolute bottom-0 w-full h-16 bg-white opacity-75 flex items-center justify-center">
            <h2 className="text-gray-900 font-bold text-lg">Card Header</h2>
          </div>
        </a>
      </div>
    </>



  )
}

export default Products
