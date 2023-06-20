import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, registerUser } from '../Redux/AuthSlice.js';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from 'react-router';


const Regeister = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (auth._id && auth.isAdmin === false) {
      navigate('/product')
      dispatch(loadUser())
    }


  },
    [auth._id, navigate])



  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""


  });




  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    setTimeout(() => {
      navigate('/product')
    })

  }




  return (
    <section className="bg-white  p-2 ">

      <div className="flex justify-center max-h-screen py-10">

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-4/5">
          <div className="w-full">
            <h1 className="text-4xl py-7 font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Registration now.
            </h1>
            <p className="mt-4 text-gray-700  text-2xl">
              Let’s get you all set up so you can verify your personal account and
              begin setting up your profile.
            </p>


            {auth.registerStatus === "rejected" ? <p className='text-red-900 text-2xl pt-4'>{auth.registerError}</p> : null}
            {errors.length > 0 ? <p className='text-red-900 text-2xl pt-4'>{errors[0]}</p> : null}


            <form className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 text-xl" onSubmit={handleSubmit} >
              <div>
                <label className="block mb-2 text  text-gray-800 text-xl">
                  Name
                </label>
                <input onChange={(e) => setUser({ ...user, name: e.target.value })}
                  type="text"
                  placeholder="John"
                  className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-xl  text-gray-800">
                  Email address
                </label>
                <input onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="email"
                  placeholder="********@example.com"
                  className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-xl  text-gray-800">
                  Password
                </label>

                <input onChange={(e) => setUser({ ...user, password: e.target.value })}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
                />
                <PasswordStrengthBar
                  password={user.password}
                  className="   py-4 "

                />

              </div>
              <div className='p-0'>
                <label className="block mb-2 text-xl  text-gray-800">
                  Confirm password
                </label>
                <input onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                  type="password"
                  placeholder="Enter your password"

                  className="w-full py-2 px-3 border-2 text-xl border-violet-200 rounded-md shadow-sm focus:outline-none focus:border-violet-500"
                />
                <PasswordStrengthBar
                  password={user.confirmPassword}
                  className="   py-4 "

                />
              </div>

              <button className="flex items-center justify-between w-44 px-4 py-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-50">
                <span className='text-xl '>{auth.registerStatus === "pendding" ? "Submitting" : "Sign Up"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>

  )
}

export default Regeister
