import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BsBagFill, BsClipboardFill, BsFillPersonFill } from 'react-icons/bs'

const Dashbord = () => {



  return (



    <div className="min-h-screen flex flex-row bg-violet-100">
      <div className="flex flex-col w-56 bg-violet-900  overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-2xl  text-white uppercase">Dashbord</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <NavLink
              to="/admin/summery"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="inline-flex items-center justify-center h-14 w-14 text-lg ">
                <i className="bx bx-home" />

                <BsClipboardFill />
              </span>
              <span className="text-xl font-medium">Summery</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/products"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="inline-flex items-center justify-center h-14 w-14 text-lg text-white ">
                <i className="bx bx-home" />
                <BsBagFill />
              </span>
              <span className="text-xl font-medium">products</span>

            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500"
            >
              <span className="inline-flex items-center justify-center h-14 w-14 text-lg text-white ">
                <i className="bx bx-home" />
                <BsFillPersonFill />
              </span>
              <span className="text-xl font-medium">Users</span>

            </NavLink>
          </li>
        </ul>
      </div>
      <div className='p-10 w-full'>
        <Outlet />

      </div>

    </div>




  )
}

export default Dashbord
