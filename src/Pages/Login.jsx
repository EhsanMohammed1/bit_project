/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-24">
      <form className="p-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between p-4 ">
          <a
            href="#"
            className="text-gray-500 hover:text-violet-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
          >
            Forgot Password?
          </a>
          <NavLink to="/register" className="text-gray-500 hover:text-violet-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
          >
            I don'n ave Account
          </NavLink>
        </div>
        <button
          type="submit"
          className="bg-violet-500 text-white py-4 px-16   justify-center align-center rounded-md shadow-sm hover:bg-violet-700 focus:outline-none focus:shadow-outline-blue active:bg-violet-800 transition duration-150 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>

  )
}

export default Login
