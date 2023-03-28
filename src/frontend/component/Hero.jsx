import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-pink-900 ">
        <div className="grid max-w-screen-xl  py-8 mx-auto lg:gap-2  lg:py-32 lg:grid-cols-12 px-30">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-7xl mb-4 text-8xl font-bold tracking-tight  text-white">
              Find The Perfect
              <br /> Style <br />
              For Yourself
            </h1>
            <form>
              <label className="mb-6  text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                  placeholder="Search brand, category ,product name..."
                  required=""
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-bray-600 dark:bray:bg-blue-700 dark:focus:ring-gray-800"
                >
                  Search
                </button>
              </div>
            </form>
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
