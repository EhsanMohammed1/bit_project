import React from "react";

const Hero = () => {
  return (

    <section className=" bg-violet-900  grid max-w-screen-l mx-auto lg:gap-8 px-4  sm:px-6 md:px-8 lg:px-10 lg:py-20 lg:grid-cols-12  ">
      <div className="mr-auto place-self-center lg:col-span-7 ">
        <h1 className="max-w-7xl mb-4 px-20 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white ">
          Find The Perfect
          Design <br />
          For Your Devices
          <div className="relative w-full sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-8/12 pt-8 sm:pt-12 ">
            <div className="absolute flex items-center justify-center pl-3 pointer pt-4 ">
              <svg
                aria-hidden="true"
                className="w-5 h-5 self-center   text-gray-900 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block indent-5 w-full p-3 md:p-4 pl-10 text-sm md:text-base text-gray-900"
              placeholder="Search brand, category, product name ..."
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm md:text-base px-4 py-2 dark:bg-bray-600 dark:bray:bg-blue-700 dark:focus:ring-violet-800"
            >
              Search
            </button>
          </div>
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
