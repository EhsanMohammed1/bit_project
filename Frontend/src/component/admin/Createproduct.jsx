import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsCreate } from '../../Redux/Productslice';


const Createproduct = () => {
  const dispatch = useDispatch()
  const { createStatus } = useSelector((state) => state.products);

  const [productimage, setproductimage] = useState(null);

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setprice] = useState('');
  const [cat, setcat] = useState('');
  const [color, setcolor] = useState('');
  const [dic, setdic] = useState('');

  // console.log(productimage);

  const handleupluadimage = (e) => {
    setproductimage(e.target.files[0]);
  }



  const handlesubmit = async (e) => {
    e.preventDefault();

    console.log(brand)

    dispatch(
      productsCreate({
        name,
        brand,
        price,
        cat,
        color,
        dic,
        img: productimage
      }))
  }
  return (

    <>

      <h1 className='mb-2  text-2xl font-semibold text-center  uppercase '>upload products</h1>
      <div className="   p-8 mt-8 max-w-10xl flex ">

        <form onSubmit={handlesubmit}
          className="py-6 px-9 w-1/2  "

          method="POST">

          <div className=" ">

            <input
              required
              onChange={handleupluadimage}
              type="file"
              accept='image/*'
              placeholder="product name"
              className="w-full mb-2   rounded-md border border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
            />
          </div>


          <input
            onChange={(e) => setName(e.target.value)}
            required
            type="input"
            placeholder="product name"
            className="w-full rounded-md mb-2 border border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <input
            onChange={(e) => setprice(e.target.value)}
            required
            type="input"
            placeholder="product price"
            className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <select

            onChange={(e) => setBrand(e.target.value)}
            required
            className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md">
            <option value="">select brand</option>
            <option value="huawei">huawei</option>
            <option value="apple">apple</option>
            <option value="cat">cat</option>
            <option value="razzer">razzer</option>
            <option value="mi">mi</option>
            <option value="anker">anker</option>
          </select>
          <input
            onChange={(e) => setcolor(e.target.value)}
            required
            type="input"
            placeholder="color"
            className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <select
            onChange={(e) => setcat(e.target.value)}
            required
            className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md">
            <option value="">select category</option>
            <option value="protector&cover">protector&cover</option>
            <option value="charger">charger</option>
            <option value="headset">headset</option>
            <option value="airpods">airpods</option>
            <option value="smartwatch">smartwatch</option>
            <option value="seaker and stand etc ...">seaker and stand etc ...</option>
          </select>
          <textarea
            onChange={(e) => setdic(e.target.value)}
            required
            type="input"
            placeholder=" discription"
            className="w-full rounded-md border h-52 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <div>
            <button type='Submit' className="rounded-lg px-5  py-3 mt-4 text-center text-white font-bold bg-violet-500 text-xl transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-900">
              {createStatus === "pending" ? "Submitting" : "Submit"}

            </button>
          </div>
        </form>


        <div className="  w-1/2 justify-end px-58  py-6 flex">



          {productimage && <img src={productimage} className='sm:rounded-lg mb-20 h-xl  justify-end  max-w-xl border bg-violet-100 shadow-sm' alt="productimage" />}


        </div>
      </div>
    </>

  )
}

export default Createproduct
