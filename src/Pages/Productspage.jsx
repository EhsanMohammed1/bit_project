import React from 'react'
import Search from '../component/search'
import Product from "../component/Items"

const Products = () => {

  return (
    <div className='flex flex-col items-center'>
      <Search />
      <Product />
    </div>
  );
};

export default Products
