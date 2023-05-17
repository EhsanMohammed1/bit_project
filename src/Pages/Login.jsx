/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/AuthSlice.js';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
// import { toast } from 'react-toastify';
const Login = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (auth._id) {
      navigate('/product')
    }



  }, [auth._id, navigate])


  const [user, setUser] = useState({
    email: "",
    password: "",


  });

  console.log("auth", auth);

  const handleSubmit = (e) => {

    console.log("user", user);

    e.preventDefault();
    dispatch(loginUser(user));


  }
  // const toastify = () => {
  //   toast.success("Login Successfully", { position: "top-left", autoClose: 4000 })

  // }

  return (
    <div className="max-w-lg  mx-auto mt-24 p-8">

      <form className="p-4" onSubmit={handleSubmit} >
        <div className="mb-8 ">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-xl ">
            Email
          </label>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-xl">
            Password
          </label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"

            className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
            placeholder="Enter your password"
          />
        </div>
        <PasswordStrengthBar
          password={user.password}

        />
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
        {auth.loginStatus === "rejected" ? <p className='text-red-900 text-xl pt-4 text-center'>{auth.loginError}</p> : null}

        <button

          type="submit"
          className="bg-violet-500 text-white py-4 px-16 text-lg font-semibold mt-8  justify-center align-center rounded-md shadow-sm hover:bg-violet-700 focus:outline-none focus:shadow-outline-blue active:bg-violet-800 transition duration-150 ease-in-out"
        >



          <span span className='text-xl '>{auth.loginStatus === "pendding" ? "Submitting" : "login"}</span>




        </button>

      </form>
    </div >

  )
}

export default Login
