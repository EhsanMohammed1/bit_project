import React from 'react'
import Products from "../component/Products";
import Hero from "../component/Hero";
import Carousel from "../component/Carousel";
import Bestsells from "../component/Bestsells";
import Brands from "../component/Brands";
const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Bestsells />
      <Carousel />
      <Products />

    </>
  )
}

export default Home
