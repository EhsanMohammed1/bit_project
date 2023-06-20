import React from "react";
import "../index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { loadUser, loginUser, logoutUser } from "../Redux/AuthSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { } from 'react-router-dom'

// buttons
import Loginbt from "./Button/LoginBt"
import Checkout from "./Button/CheckoutBt";
import { BsBagFill, BsClipboardFill, BsFillPersonFill } from 'react-icons/bs'


const Navbar = () => {
  const navigate = useNavigate()
  const Auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const isAdmin = localStorage.getItem("is-admin")

  const userNavbar = (
    <div
      className="flex items-center w-full justify-between p-6 lg:px-28 bg-violet-900 "
      aria-label="Global"
    >
      <div className="flex lg:flex-1 ">
        <NavLink to="/" className="-m-1.5 p-1.5 flex justify-center align-center">
          <img className="h-8 w-auto" src="" alt="" />
          <h1 className="text-2xl px-2 py-1 font-bold text-white">Accessores</h1>
        </NavLink>
      </div>
      <div className="flex lg:hidden" >
        <button
          type="button"
          className="-m-2.5  inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
          className="text-xl font-ubuntu leading-6text-white font-bold text-white  hover:text-violet-300"
        >
          Home
        </NavLink>
        <NavLink to="/product" className="text-xl font-semibold leading-6 text-white   hover:text-violet-300">
          Shop
        </NavLink>
        <NavLink to="/about" className="text-xl font-semibold leading-6 text-white  hover:text-violet-300">
          About
        </NavLink>
        <NavLink to="/contact" className="text-xl font-semibold leading-6 text-white  hover:text-violet-300">
          Contact
        </NavLink>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end " >
        <NavLink to="/checkout">
          <Checkout />
        </NavLink>
        {
          Auth._id ?
            <RiLogoutBoxRLine className="h-10 w-10 text-white px-1 cursor-pointer hover:text-violet-400" onClick={() => {
              dispatch(logoutUser())
              dispatch(loadUser(null))
              toast.warning(`You Loged Out !`, { position: "top-left", autoClose: 4000 })
              navigate("/login")

            }} />
            : <NavLink to="/login">
              <Loginbt />
            </NavLink>
        }
      </div>

    </div>
  );
  const adminNavbar = (

    <div
      className="flex items-center w-full justify-between align-center p-6 lg:px-28 bg-violet-900 "
      aria-label="Global"
    >
      <div className="flex lg:flex-1 ">
        <NavLink to="/" className="-m-1.5 p-1.5 flex justify-center align-center">
          <img className="h-8 w-auto" src="" alt="" />
          <h1 className="text-2xl px-2 py-1 font-bold text-white">Admin Panal</h1>
        </NavLink>
      </div>

      <div className=" lg:flex lg:gap-x-12 justify-center align-center">
        <NavLink
          to="/admin/summery"
          className=" flex text-2xl  leading-6text-white font-bold text-white  hover:text-violet-300"
        >
          <BsClipboardFill className="mx-1" />
          Summery
        </NavLink>


        <NavLink
          to="/admin/products"
          className=" flex text-2xl  leading-6text-white font-bold text-white  hover:text-violet-300"
        >
          <BsBagFill className="mx-1" />
          Products
        </NavLink>

        <NavLink
          to="/admin/users"
          className=" flex text-2xl  leading-6text-white font-bold text-white  hover:text-violet-300"
        >
          <BsFillPersonFill className="mx-1" />
          Users
        </NavLink>

      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end " >
        <NavLink to="/checkout">
        </NavLink>

        {
          isAdmin ?
            <RiLogoutBoxRLine className="h-10 w-10 text-white px-1 cursor-pointer hover:text-violet-400" onClick={() => {
              dispatch(logoutUser())
              dispatch(loadUser(null))
              toast.warning(`You Loged Out !`, { position: "top-left", autoClose: 4000 })
              navigate("/login")
            }} />
            : <NavLink to="/login">
              <Loginbt />
            </NavLink>
        }
      </div>
    </div>

  );

  return (
    <>

      {isAdmin === 'true' && Auth._id ? adminNavbar : userNavbar}

    </>
  );
};

export default Navbar;
