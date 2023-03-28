import React from "react";
import "../../index.css";

const navbar = () => {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-28  bg-pink-900"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 flex justify-center align-center">
          <img className="h-8 w-auto" src="" alt="" />
          <h1 className="text-xl px-2 py-1 font-bold text-white">Accessores</h1>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a
          href="#"
          className="text-lg font-ubuntu leading-6text-white font-bold text-white"
        >
          Home
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-white">
          Product
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-white">
          Shop
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-white">
          About
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-white">
          Contact
        </a>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
        {/* shoping icon */}
        <svg
          class="h-8 w-8 text-white px-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {/* heart svg */}
        <svg
          class="h-8 w-8 text-white px-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>

        {/* usericon */}
        <svg
          class="h-8 w-8 text-white px-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </nav>
  );
};

export default navbar;
