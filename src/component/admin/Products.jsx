import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate = useNavigate()
  return (
    <div className='  py-8'>
      <p>products admin</p>
      <button className='className="flex rounded-lg p-3 text-center text-white font-bold bg-violet-500 text-xl transition-all duration-200 ease-in-out focus:shadow hover:text-violet-900"
' onClick={() => navigate("/admin/products/create-product")}>Create</button>
      <Outlet />
    </div>
  )
}

export default Products
