import React from 'react'
import Search from '../component/search'
import Product from "../component/Items"
import Pagination from '../component/Pagination'
const Products = () => {

  return (
    <div className='flex flex-col items-center'>
      <Search />
      <Product />
      {/* <Pagination /> */}
    </div>
  );
};

export default Products
