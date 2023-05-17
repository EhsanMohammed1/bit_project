
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Fotter = () => {
  return (

    <footer className="  bg-violet-900 grid ">
      <div
        tabIndex={0}
        aria-label="footer"
        className="focus:outline-none border-t border-b border-gray-200 dark:border-violet-700 py-16 h-full "
      >
        <div className="mx-auto container px-4  ">
          <div className="lg:flex">
            <div className="w-full lg:w-2/2  lg:mb-0 ">
              <div className="w-full lg:w-1/3 px-6">
                <ul>
                  <li>

                  </li>
                  <li className="mt-6">
                    <NavLink

                      to="/" className="focus:outline-none  text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                    >

                      Home

                    </NavLink>
                  </li>
                  <li className="mt-6">
                    <NavLink

                      to="/product" className="focus:outline-none  text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                    >

                      Products

                    </NavLink>
                  </li>


                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>

                  </li>
                  <li className="mt-6">
                    <NavLink to="/contact"
                      className="focus:outline-none  text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href=""
                    >
                      Contacts
                    </NavLink>
                  </li>
                  <li className="mt-6">
                    <NavLink to="/about"
                      className="focus:outline-none  text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href=""
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-2/2 flex">
              <div className="w-full lg:w-2/2 px-6">
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      className="focus:outline-none  text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                    >
                      Privacy policy
                    </NavLink>
                  </li>
                  <li className="mt-6">
                    <NavLink
                      className="focus:outline-none  text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white" to="/"
                    >
                      Terms of service
                    </NavLink>

                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                <div className="flex items-center mb-6">
                  <a aria-label="linkedin" target='blank' href="https://www.linkedin.com/in/ehsan-muhammad-65680312a">
                    <div className="text-white cursor-pointer hover:text-brand dark:hover:text-brand"
                    >
                      <AiFillLinkedin className='text-4xl hover:text-violet-400' />
                    </div>
                  </a>

                  <a
                    aria-label="facebook"
                    href="https://www.facebook.com/ehsan.mhamad.5/"
                    className="ml-4"
                    target='blank'
                  >
                    <div className=" text-white cursor-pointer hover:text-brand dark:hover:text-brand">
                      <AiFillFacebook className='text-4xl hover:text-violet-400' />
                    </div>
                  </a>

                  <a aria-label="AiFillGithub" target='blank' href="https://github.com/wecho12">
                    <div className="text-white cursor-pointer hover:text-brand dark:hover:text-brand ml-4">
                      <AiFillGithub className='text-4xl hover:text-violet-400' />
                    </div>
                  </a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="py-16 flex flex-col justify-center items-center ">
        <navlink to="/"
          className="focus:outline-none"
          tabIndex={0}
          role="link"
          aria-label="home link"

        >
          <img
            className="dark:hidden text-white h-2 w-24 sm:h-10 "
            src="https://companieslogo.com/img/orig/EPAM-3c018a11.png?t=1660577598"
            alt=" logo"
          />

        </navlink>
        <p
          tabIndex={0}
          className="focus:outline-none mt-6 text-xs lg:text-sm leading-none text-white"
        >
          2023 EHSAN . All Rights Reserved.
        </p>
      </div>
    </footer >


  )
}

export default Fotter
