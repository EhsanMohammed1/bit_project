import React from 'react'
// import { IoHeartOutline, IoHeartSharp } from "react-icons/io5"
// import { NavLink } from 'react-router-dom'
import { useGetallProductsQuery } from '../Redux/ProductApi'


const Items = () => {

  const { data, error, isloadding } = useGetallProductsQuery();
  return (
    <div>
      <h1>wefwe</h1>
      {isloadding ?
        (<h1>loadding ...</h1>
        ) : error ?
          (<h1>an error Happned</h1>
          ) : (
            <>
              <h1>Products</h1>
              <section className='grid transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:border-violet-900  duration-200  p-4  justify-between sm:rounded-[8px] cursor-pointer border border-violet-600 '>
                {data.map(products => <div key={products.id} >
                  <div>

                    <h3 >{products.name}</h3>
                    <h3>{products.brand}</h3>
                    <p>{products.dic}</p>
                    <img src={products.img} alt={products.name} />
                    <h3>{products.price}</h3>
                  </div>



                </div>)}
              </section>

            </>
          )

      }

    </div>
  );
};

export default Items




