import React from "react";
import "../../index.css";

let Logo = require("../../frontend/image/logo.png");

const navbar = () => {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-28"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 flex justify-center align-center">
          <img className="h-8 w-auto" src="" alt="" />
          <h1 className="text-xl px-2 py-1 font-bold">Accessores</h1>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
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
          className="text-lg font-semibold leading-6 text-gray-900 font-bold"
        >
          Home
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
          Product
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
          Shop
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
          About
        </a>
        <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
          Contact
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900"
        ></a>
        <svg
          class="h-8 w-8 text-black-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>{" "}
        <svg
          class="h-8 w-8 text-black-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            class="h-8 w-8 text-black-500"
          />{" "}
          <circle cx="8.5" cy="7" r="4" />{" "}
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      </div>
    </nav>
  );
};

export default navbar;
