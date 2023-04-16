import React from 'react'
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5"
import { NavLink } from 'react-router-dom'
import { useGetallProductsQuery } from '../Redux/ProductApi'


const Items = () => {

  const { data, error, isloadding } = useGetallProductsQuery();
  return (
    <div>
      {isloadding ?
        (<h1>loadding ...</h1>
        ) : error ?
          (<h1>an error Happned</h1>
          ) : (
            <>
              <h1>Products</h1>
              <div className='producs'>
                {data.map(products => <div key={products.id} className=''>
                  <h3>{products.name}</h3>
                </div>)}
              </div>

            </>
          )

      }
    </div>
  );
};

export default Items





//   const { data } = useGetallProductsQuery()
//   const cardItem = (item) => {
//     return (



//       <div key={item.id}
//         className=" grid transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:border-violet-900  duration-200  p-4  justify-between sm:rounded-[8px] cursor-pointer border border-violet-600 ">
//         <div
//           className=" text-white" >
//           <img src={item.img} alt="card" />

//         </div>

//         <h4 className="text-xl font-[600] text-black text-center pt-7">{item.brand}</h4>
//         <h4 className="text-xl font-[500] text-black text-center">{item.name}</h4>
//         <h4 className="text-l font-[400] text-black text-center ">{item.price}$</h4>

//         <div className='flex justify-between' >
//           <IoHeartOutline size={30} />
//           <IoHeartSharp size={30} />

//           <NavLink to={`/product/${item.id}`}
//             className="  hover:bg-violet-500   cursor-pointer justify-center text-violet-700 font-semibold hover:text-white py-2 px-5 border border-violet-500 hover:border-transparent rounded">
//             Buy Now

//           </NavLink>
//         </div>
//       </div>



//     )
//   }
//   return (
//     <>
//       <div className='flex justify-center pt-16 p-8'>
//         <h1 className='text-black underline text-3xl  font-extrabold tracking-wide uppercase'>Products</h1>
//       </div>

//       <section

//         className="grid gap-8 lg:grid-cols-6  p-10 "
//         contentEditable="true" >

//         {data.map(Product => { })}
//       </section>
//     </>
//   )
// }