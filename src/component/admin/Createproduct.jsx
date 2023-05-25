import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productsCreate } from '../../Redux/Productslice';


const Createproduct = () => {
  const dispatch = useDispatch()

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
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name, brand, price, cat, color, dic);
    dispatch(productsCreate({
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

      <div className=" w-full  p-8 mt-8 ">
        <h1 className='mb-2 block text-2xl font-semibold  px-10  '>upload products</h1>
        <div className=" w-full max-w-4xl bg-violet-100 flex ">
          <form onSubmit={handlesubmit}
            className="py-6 px-9"
            action=""
            method="POST"
          >
            <div className=" ">

              <input
                required
                onChange={handleupluadimage}
                type="file"
                accept='image/*'
                placeholder="product name"
                className="w-full  rounded-md border border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
              />
            </div>

            <div className=' p-4 m-8  '>
              {productimage && <img src={productimage} alt="productimage" />}
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

              className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md">
              <option value="">select category</option>
              <option value="">protector&cover</option>
              <option value="">charger</option>
              <option value="">headset</option>
              <option value="">airpods</option>
              <option value="">smartwatch</option>
              <option value="">seaker and stand etc ...</option>
            </select>
            <input
              onChange={(e) => setdic(e.target.value)}
              required
              type="input"
              placeholder=" discription"
              className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
            />
            <div>
              <button className="hover:shadow-form mt-4 rounded-md bg-violet-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Createproduct
