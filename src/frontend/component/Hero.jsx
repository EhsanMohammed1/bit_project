import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-pink-900 ">
        <div className="grid max-w-screen-l  py-8 mx-auto lg:gap-8 px-32 lg:py-10 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-7xl mb-4 text-8xl font-bold tracking-tight  text-white">
              Find The Perfect
              <br /> Style <br />
              For Yourself
              <div className="relative w-8/12 pt-12">
                <div className="absolute flex items-center pl-3 pointer pt-3  ">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-900 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 "
                  placeholder="Search brand, category ,productname ..."
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-bray-600 dark:bray:bg-blue-700 dark:focus:ring-gray-800"
                >
                  Search
                </button>
              </div>
            </h1>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 flex">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/981/082/original/wireless-headphones-side-view-white-icon-on-a-transparent-background-3d-rendering-png.png"
              alt="hero"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
