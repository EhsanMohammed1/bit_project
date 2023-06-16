import React from 'react'
import { AiOutlineBarChart } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { BiFoodMenu } from "react-icons/bi"
const Summery = () => {
  return (
    <>

      <div className='p-8 flex justify-center bg'>

        <p className='text-5xl'>OverView</p>
      </div>
      <p className='text-3xl text-center pb-12'>How your Shop is performing compared to the previous month </p>



      <div className='flex gap-12 justify-center '>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 w-1/5">
          <NavLink className='text-center'>
            <FaUsers className='  text-8xl  h-44 w-full text-white  pb-8' />

            <div className='flex  justify-center'>

              <p className="text-4xl font-semibold mb-2 text-white ">7   </p>
            </div>
            <p className="text-4xl text-white py-2">Users</p>
            <p className="text-2xl text-green-700">10%</p>

          </NavLink>

        </div>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 w-1/5">
          <NavLink className='text-center'>
            < BiFoodMenu className='  text-8xl  h-44 w-full text-white pb-8' />

            <div className='flex  justify-center'>

              <p className="text-4xl font-semibold mb-2 text-white ">38   </p>
            </div>
            <p className="text-4xl text-white py-2">Order</p>
            <p className="text-2xl text-green-700">70%</p>

          </NavLink>

        </div>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 w-1/5">
          <NavLink className='text-center'>
            <AiOutlineBarChart className='  text-8xl  h-44 w-full text-white pb-8' />

            <div className='flex  justify-center'>

              <p className="text-4xl font-semibold mb-2 text-white ">$5,000   </p>
            </div>
            <p className="text-4xl text-white py-2">Earnings</p>
            <p className="text-2xl text-red-700 ">-30%</p>
          </NavLink>

        </div>
      </div>


    </>
  )
}

export default Summery
