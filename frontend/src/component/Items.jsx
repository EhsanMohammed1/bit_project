import React from 'react';
import { NavLink } from 'react-router-dom';
import AddToChekOutBt from './Button/AddToChekOutBt';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from '../Redux/CardSlice';
const Items = ({ searchValue }) => {
  const { items: data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCard = (product) => {
    dispatch(addToCard(product));
    console.log(product);
  }

  const filteredItems = data?.filter((product) => {
    const searchValueLowerCase = searchValue.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchValueLowerCase) ||
      product.cat.toLowerCase().includes(searchValueLowerCase)
    );
  });

  return (
    <section className='p-1 flex flex-wrap items-center justify-center'>

      {status === "pending" && (
        <div className='text-5xl text-violet-900 p-40'>
          <div className="text-left">
            <div role="status">
              {/* Loading spinner */}
            </div>
          </div>
        </div>
      )}

      {status === "rejected" && (
        <div className='text-5xl text-violet-900 p-20'>
          <div className="border-t border-b border-violet-500 text-gray-700 px-4 py-3" role="alert">
            <p className="font-bold">An Error Happened!</p>
            <p className="text-sm text-center py-2 font-bold">Failed to Fetch Data</p>
          </div>
        </div>
      )}

      {filteredItems?.length === 0 ? (
        <div className="text-5xl text-violet-900 p-20">
          No items found.
        </div>
      ) : (
        filteredItems?.map((product) => (
          <div key={product._id} className="w-full flex flex-col items-center max-w-sm m-4 p-2 bg-white gap-4 border rounded-2xl shadow-xl dark:border-violet-700 border-transparent hover:border-violet-500 transition duration-300 border-violet-200">
            <div className='self-end'>
              <button onClick={() => handleAddToCard(product)}>
                <AddToChekOutBt />
              </button>
            </div>
            <NavLink to={`/product/${product._id}`} className='w-72 h-56'>
              <img
                className="p-8 w-72 h-56 py-0 object-contain delay-250 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-32"
                src={"http://localhost:5000/" + product.img?.path}
                alt={product.name}
              />
            </NavLink>
            <div>
              <h5 className="text-2xl py-2 text-center font-semibold capitalize text-gray-900 dark:text-white">
                {product.brand}<br />
              </h5>
              <h2 className='text-center text-lg'>{product.name}</h2>
            </div>
            <div className="flex items-center justify-between p-2 px-6 w-full">
              <span className="text-2xl font-bold text-violet-800 dark:text-white capitalize bg-violet-700 px-7 py-2 rounded-lg hover:border-violet-900">
                {product.price}$
              </span>
            </div>
          </div>
        ))
      )}
    </section>
  );


};

export default Items;
