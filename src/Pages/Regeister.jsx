import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/AuthSlice.js';
import PasswordStrengthBar from 'react-password-strength-bar';



const Regeister = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const [errors, setErrors] = useState([]); // ["passwords didn't match"
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""


  });

  console.log("auth", auth);
  const handleSubmit = (e) => {
    console.log("user", user);

    e.preventDefault();
    dispatch(registerUser(user));

    if (user.confirmPassword !== user.password) {
      setErrors([...errors, "passwords didn't match"]);
      return;
    }
  }



  return (
    <section className="bg-white dark:bg-gray-900 px-0 py-0">
      <div className="flex justify-center min-h-screen">

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-4/5">
          <div className="w-full">
            <h1 className="text-4xl py-7 font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Registration now.
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-2xl">
              Let’s get you all set up so you can verify your personal account and
              begin setting up your profile.
            </p>
            {errors}
            <form className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 text-xl" onSubmit={handleSubmit} >
              <div>
                <label className="block mb-2  text-gray-600 dark:text-gray-200 text-xl">
                  Name
                </label>
                <input onChange={(e) => setUser({ ...user, name: e.target.value })}
                  type="text"
                  placeholder="John"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="email"
                  placeholder="********@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">
                  Password
                </label>

                <input onChange={(e) => setUser({ ...user, password: e.target.value })}
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <PasswordStrengthBar
                  password={user.password}
                  className="   py-4 "

                />

              </div>
              <div>
                <label className="block mb-2 text-xl text-gray-600 dark:text-gray-200">
                  Confirm password
                </label>
                <input onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                  type="password"
                  placeholder="Enter your password"

                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <PasswordStrengthBar
                  password={user.confirmPassword}
                  className="   py-4 "


                />
              </div>
              <button className="flex items-center justify-between w-44 px-6 py-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-50">
                <span className='text-xl'>Sign Up </span>
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
