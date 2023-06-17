import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsUpdate, fetchProductDetails } from '../../Redux/Productslice';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { updateStatus, product } = useSelector((state) => state.products);

  const [productimage, setproductimage] = useState(null);

  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [cat, setCat] = useState('');
  const [color, setColor] = useState('');
  const [dic, setDic] = useState('');
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        let product = await dispatch(fetchProductDetails(productId));
        product = product.payload;
        setImagePath("http://localhost:5000/"+product.img.path);
        setName(product.name);
        setBrand(product.brand);
        setPrice(product.price);
        setCat(product.cat);
        setColor(product.color);
        setDic(product.dic);
      } catch (error) {
        // Handle error case
      }
    };

    getProductDetails();
  }, [dispatch, productId]);

  const handleupluadimage = (e) => {
    const file = e.target.files[0];
    setproductimage(file);
    setImagePath(URL.createObjectURL(file));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(
        productsUpdate({
          productId,
          name,
          brand,
          price,
          cat,
          color,
          dic,
          img: productimage
        })
      );
  
      if (response && response._id) {
        setID(response._id);
      }
    } catch (error) {
      // Handle error case
    }
  };

  return (

    <>

      <div className="   p-8 mt-8 max-w-10xl flex ">

        <form onSubmit={handleSubmit}
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
            value={name}
            required
            type="input"
            placeholder="product name"
            className="w-full rounded-md mb-2 border border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
            type="input"
            placeholder="product price"
            className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <select

            onChange={(e) => setBrand(e.target.value)}
            value={brand}
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
            onChange={(e) => setColor(e.target.value)}
            value={color}
            required
            type="input"
            placeholder="color"
            className="w-full rounded-md border mb-2 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <select
            onChange={(e) => setCat(e.target.value)}
            value={cat}
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
            onChange={(e) => setDic(e.target.value)}
            value={dic}
            required
            type="input"
            placeholder=" discription"
            className="w-full rounded-md border h-52 border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
          />
          <div>
            <button type='Submit' className="rounded-lg px-5  py-3 mt-4 text-center text-white font-bold bg-violet-500 text-xl transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-900">
              {updateStatus === "pending" ? "Submitting" : "Submit"}

            </button>
          </div>
        </form>


        <div className="  w-1/2 justify-end px-58  py-6 flex">


          {setproductimage  && <img src={imagePath} className='sm:rounded-lg mb-20 h-xl  justify-end  max-w-xl border bg-violet-100 shadow-sm' alt="productimage" />}


        </div>
      </div>
    </>

  );
};

export default UpdateProduct;
