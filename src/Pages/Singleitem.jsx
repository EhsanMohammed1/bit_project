/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetallProductsQuery } from '../Redux/ProductApi';
import { useParams } from 'react-router-dom';
import { addToCard } from '../Redux/CardSlice';
import AddToChekOutBt from '../component/Button/AddToChekOutBt';

const Singleitem = () => {
  let { id } = useParams();
  id = parseInt(id);
  const dispatch = useDispatch();
  const handleAddToCard = (product) => {
    dispatch(addToCard(product));
  }

  const [product, setProduct] = useState({})
  const { data: products } = useGetallProductsQuery();



  useEffect(() => {
    setProduct(products?.filter((p) => p.id === id));

  }, [products, id])
  console.log(product);

  return (
    <div>
      <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap items-center mb-16">
                <li className="mr-6">
                  <a
                    className="flex items-center text-xl font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <NavLink to="/">
                      <span>Home</span>
                    </NavLink>
                    <svg
                      className="ml-6"
                      width={4}
                      height={7}
                      viewBox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="flex items-center text-xl font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <NavLink to="/product">

                      <span>Products</span>
                    </NavLink>

                    <svg
                      className="ml-6"
                      width={4}
                      height={7}
                      viewBox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    className="text-xl font-medium text-violet-500 hover:text-violet-600"
                    href="#"
                  >
                    {product[0]?.brand} {product[0]?.name}
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">

              <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">

                <div className="w-full sm:w-9/12 px-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-32">
                  <img
                    className="mb-5"
                    src={product[0]?.img}
                    alt={product[0]?.name}


                  />
                </div>

              </div>

            </div>

            <div className="w-full lg:w-1/2 px-8">
              <div className="max-w-md mb-4">
                <div className="flex flex-wrap -mx-2">
                  <div className=" md:w-1/2  p-3  md:mb-0" onClick={() => handleAddToCard(product)}>
                    <AddToChekOutBt />
                  </div>

                </div>
                <span className="text-xs text-gray-400 tracking-wider">
                  {product?.brand} {product?.id}
                </span>
                <h2 className="mt-6 mb-4  md:text-5xl lg:text-4xl font-heading font-medium">
                  <span className='text-5xl'>{product[0]?.brand}</span>
                  <h1 className=''>{product[0]?.name}</h1>

                </h2>
                <p className="flex items-center mb-6">
                  <span className="mr-2 text-sm text-violet-500 font-medium">$</span>
                  <span className="text-3xl text-violet-500 font-medium">{product[0]?.price}</span>
                </p>
                <p className="text-lg text-gray-400">
                  {product[0]?.dic}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-heading font-medium">
                  <span>Color:</span>
                  <span className="text-gray-400 space-x-2">{product[0]?.color}</span><br />
                  <span>Brand:</span>
                  <span className="text-gray-400">{product[0]?.brand}</span>

                </h4>

              </div>



            </div>
          </div>
        </div>
      </section >


    </div >


  )
}

export default Singleitem
