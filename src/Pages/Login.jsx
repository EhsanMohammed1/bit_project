/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div className="max-w-lg  mx-auto mt-24 p-8">
      <form className="p-4">
        <div className="mb-8 ">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-xl ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between p-4 ">
          <a
            href="#"
            className="text-gray-500 text-lg hover:text-violet-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
          >
            Forgot Password?
          </a>
          <NavLink to="/register" className="text-gray-500 text-lg hover:text-violet-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
          >
            I don'n ave Account
          </NavLink>
        </div>
        <button
          type="submit"
          className="bg-violet-500 text-white py-4 px-16 text-lg font-semibold mt-8  justify-center align-center rounded-md shadow-sm hover:bg-violet-700 focus:outline-none focus:shadow-outline-blue active:bg-violet-800 transition duration-150 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>

  )
}

export default Login
