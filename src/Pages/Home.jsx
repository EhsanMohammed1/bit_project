import React from 'react'
import Products from "../component/Products";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Carousel from "../component/Carousel";
import Bestsells from "../component/Bestsells";
import Brands from "../component/Brands";
import Fotter from "../component/Fotter";
const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Products />
      <Bestsells />
      <Brands />
    </>
  )
}

export default Home
