import React from 'react'
import { NavLink } from 'react-router-dom'
const Notfound = () => {
  return (
    <>
      {/* component */}
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl " >
                  Looks like you've found the doorway to the great nothing 

                </h1>
                <p className="py-10 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you need
                  to go.
                </p>
                <NavLink to="/"
                  className="  hover:bg-violet-500   cursor-pointer justify-center text-violet-700 font-semibold hover:text-white py-4 px-10 border border-violet-500 hover:border-transparent rounded">
                  Home !

                </NavLink>



              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div >
    </>

  )
}

export default Notfound