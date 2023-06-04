import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Carousel = () => {
  const slides = [
    {
      url: " https://savyour.com.pk/products/wp-content/uploads/2022/11/Mobile-Accessories-Banner.jpg",

    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/ghi-10bestphonecases-1663335912.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",

    },
    {
      url: "https://cdn.shopify.com/s/files/1/0155/5801/files/The-Dairy-Tech-Accessories-Phone-Cases.jpg?v=1645044677",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0235/2326/2541/files/Vlogging_Updates_IMG1.png?v=1645795475",
    }

  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {

    const isLast = currentIndex === slides.length + - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  
  return (

    <section className='w-[1850px] h-[720px] py-8 w- m-auto  px-4 relative group' >
      <div className='flex p-5 justify-center'>
        <h1 className='text-black underline text-2xl font-extrabold '>OFFERS </h1>
      </div>
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full  bg-center bg-cover duration-500'>
      </div>
      {/* left button */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* right button */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </section>
  )
}

export default Carousel;
