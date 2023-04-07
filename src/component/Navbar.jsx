import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

// buttons
import Loginbt from "./Button/LoginBt"
import Checkout from "./Button/checkoutBt";


const navbar = () => {
  return (
    <nav

      className="flex items-center justify-between p-6 lg:px-28 bg-violet-900 "
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <NavLink to="/" className="-m-1.5 p-1.5 flex justify-center align-center">
          <img className="h-8 w-auto" src="" alt="" />
          <h1 className="text-xl px-2 py-1 font-bold text-white">Accessores</h1>
        </NavLink>
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
        <NavLink
          to="/"
          className="text-lg font-ubuntu leading-6text-white font-bold text-white"
        >
          Home
        </NavLink>
        <NavLink to="/product" className="text-lg font-semibold leading-6 text-white">
          Product
        </NavLink>

        <NavLink to="/about" className="text-lg font-semibold leading-6 text-white">
          About
        </NavLink>

        <NavLink to="/contact" className="text-lg font-semibold leading-6 text-white">
          Contact
        </NavLink>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end " >



        {/* heart svg */}
        <NavLink to="/checkout" >
          < Checkout />
        </NavLink>

        {/* usericon */}
        <NavLink to="/login">
          < Loginbt />
        </NavLink>



      </div>
    </nav>
  );
};

export default navbar;
