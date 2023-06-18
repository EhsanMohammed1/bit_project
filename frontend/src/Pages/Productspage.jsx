import React from 'react'
import Search from '../component/search'
import Product from "../component/Items"
import { useState } from 'react';

const Products = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='flex flex-col items-center'>
      <Search setSearchValue={setSearchValue} />
      <Product searchValue={searchValue} />
    </div>
  );
};

export default Products
