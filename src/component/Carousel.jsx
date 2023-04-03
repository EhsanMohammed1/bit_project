import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Carousel = () => {
  const slides = [
    {
      url: "https://t3.ftcdn.net/jpg/01/59/74/48/360_F_159744874_MshH8rY3U6RRnUXmHpAGmF31my7hJAtV.jpg",

    },
    {
      url: "https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2021/05/060605053838/Mcdodo-Mobile-Phone-Accessories-770x403.jpg",

    },
    {
      url: "http://www.pointekonline.com/wp-content/uploads/2018/03/phone-accessories.jpg",
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
