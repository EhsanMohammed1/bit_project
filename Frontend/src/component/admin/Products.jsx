import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate = useNavigate()
  return (
    <div className='  py-8 '>
      <p className='text-5xl  font-bold text-center 
      '>Products Admin</p>
      <button className="  rounded-lg px-5 ml-10 py-3 mt-4 text-center text-white font-bold bg-violet-500 text-xl transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-900"
        onClick={() => navigate("/admin/products/create-product")}>Create</button>
      <button className="  rounded-lg px-5 ml-10 py-3 mt-4 text-center text-white font-bold bg-violet-500 text-xl transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-900"
        onClick={() => navigate("/admin/products/create-product")}>Edit</button>
      <button className="  rounded-lg px-5 ml-10 py-3 mt-4 text-center text-white font-bold bg-violet-500 text-xl transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-900"
        onClick={() => navigate("/admin/products/create-product")}>Delete</button>
      <Outlet />
    </div>
  )
}

export default Products
