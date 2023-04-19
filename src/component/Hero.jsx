import React from "react";
// import Search from "../component/search";
const Hero = () => {
  return (

    <section className=" bg-violet-900  grid max-w-screen-l mx-auto lg:gap-8 px-4  sm:px-6 md:px-8 lg:px-10 lg:py-20 lg:grid-cols-12  ">
      <div className="mr-auto place-self-center lg:col-span-7 ">
        <h1 className="max-w-7xl mb-4 px-20 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white ">
          Find The Perfect
          Design <br />
          For Your Devices

        </h1>
      </div>
      <div className="lg:mt-0 px-20 lg:col-span-5 flex justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/981/082/original/wireless-headphones-side-view-white-icon-on-a-transparent-background-3d-rendering-png.png"
          alt="hero"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none"
        />
      </div>
    </section>

  );
};

export default Hero;
