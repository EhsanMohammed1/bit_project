import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Carousel = () => {
  const slides = [
    {
      url: "https://thumbs.dreamstime.com/b/beauty-brunette-model-girl-perfect-makeup-trendy-accessories-fashion-wear-88929334.jpg",

    },
    {
      url: "https://media.istockphoto.com/id/1010215852/photo/beautiful-girl-wearing-hat.jpg?s=612x612&w=0&k=20&c=My74d5aoGLaALQ_wt0TJeatf5svgGS6ks1g0OS8pEMU=",

    },
    {
      url: "https://cdn.shopify.com/s/files/1/0246/1060/3085/articles/Test_22_900x.jpg?v=1612489900",
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='max-w-[1850px] h-[720px] py-8 w- m-auto  px-4 relative group' >

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
