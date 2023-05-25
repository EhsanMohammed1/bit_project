import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsCreate } from '../../Redux/Productslice';


const Createproduct = () => {
  const dispatch = useDispatch()
  const { createStatus } = useSelector((state) => state.products);

  const [productimage, setproductimage] = useState('');

  const [name, setName] = useState('');
  const [brand, setbrand] = useState('');
  const [price, setprice] = useState('');
  const [cat, setcat] = useState('');
  const [color, setcolor] = useState('');
  const [dic, setdic] = useState('');

  console.log(productimage);

  const handleupluadimage = (e) => {
    const file = e.target.files[0];
    tranformimage(file)
  }

  const tranformimage = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setproductimage(reader.result)
      }
    } else {
      setproductimage('')
    }
  }


  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(name, brand, price, cat, color, dic);

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
      <div className="   p-8 mt-8 w-38 flex ">

        <form onSubmit={handlesubmit}
          className="py-6 px-9 "
          action=""
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
            onChange={(e) => setbrand(e.target.value)}
            required
            className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md">
            <option value="">select brand</option>
            <option value="">huawei</option>
            <option value="">apple</option>
            <option value="">cat</option>
            <option value="">razzer</option>
            <option value="">mi</option>
            <option value="">anker</option>
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
            <option value="">protector&cover</option>
            <option value="">charger</option>
            <option value="">headset</option>
            <option value="">airpods</option>
            <option value="">smartwatch</option>
            <option value="">seaker and stand etc ...</option>
          </select>
          <textarea
            onChange={(e) => setdic(e.target.value)}
            required
            type="input"
            placeholder=" discription"
            className="w-full rounded-md border h-44 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <div>
            <button type='Submit' className="rounded-lg px-5  py-3 mt-4 text-center text-white font-bold bg-violet-500 text-xl transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-900">
              {createStatus === "pending" ? "Submitting" : "Submit"}

            </button>
          </div>
        </form>


        <div className="  max-w-4xl bg-violet-100  ">


          <div className=' p-4 m-8  w-42 justify-self-end   '>
            {productimage && <img src={productimage} alt="productimage" />}
          </div>

        </div>
      </div>
    </>

  )
}

export default Createproduct
