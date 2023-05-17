import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>products admin</p>
      <button className='rounded-sm bg-red-400' onClick={() => navigate("/admin/products/create-product")}>Create</button>
      <Outlet />
    </div>
  )
}

export default Products
