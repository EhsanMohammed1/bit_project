import React from 'react'
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Bestsells = () => {

  const slides = [
    {
      url: "https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2019/11/apple-airpods-pro-sat%C4%B1%C5%9Flar%C4%B1-y%C3%BCkseli%C5%9Fte-apple-yo%C4%9Fun-%C3%A7al%C4%B1%C5%9F%C4%B1yor.jpg",

    },
    {
      url: "https://i.ytimg.com/vi/fuwqFhiLobc/maxresdefault.jpg",

    },
    {
      url: "https://i.ytimg.com/vi/KLoJQozTjmQ/maxresdefault.jpg",
    },
    {
      url: " https://i.ytimg.com/vi/6tf6Ld_fCCA/maxresdefault.jpg",
    },
    {
      url: "https://nano.komputronik.pl/wp-content/uploads/2023/02/miband8.jpg ",
    },
    {
      url: "https://oiot.pl/wp-content/uploads/2021/07/huawei-sound-x-2021-2.jpg ",
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
    }, 9000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className='w-[1850px] h-[720px] py-8 w- m-auto  px-4 relative group' >
      <div className='flex p-5 justify-center'>
        <h1 className='text-black underline text-2xl font-extrabold tracking-wide uppercase'>Bestsells</h1>
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

export default Bestsells
