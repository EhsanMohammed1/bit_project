/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import React from 'react'

const Fotter = () => {
  return (

    <footer className="  bg-violet-900 ">
      <div
        tabIndex={0}
        aria-label="footer"
        className="focus:outline-none border-t border-b border-gray-200 dark:border-violet-700 py-16  "
      >
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4 ">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <a
                      className="focus:outline-none focus:underline  text-2xl lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href=""
                    >
                      Components
                    </a>
                  </li>
                  <li className="mt-6">
                    <a
                      className="focus:outline-none focus:underline text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href="j"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mt-6">
                    <a
                      className="focus:outline-none focus:underline text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href=""
                    >
                      Products
                    </a>
                  </li>


                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <a
                      className="focus:outline-none focus:underline text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href=""
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="mt-6">
                    <a
                      className="focus:outline-none focus:underline text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href=""
                    >
                      Contacts
                    </a>
                  </li>
                  <li className="mt-6">
                    <a
                      className="focus:outline-none focus:underline text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                      href=""
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <a
                      href=""
                      className="focus:underline focus:outline-none text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="mt-6">
                    <a
                      className="focus:underline focus:outline-none text-xs lg:text-xl leading-none hover:text-brand dark:hover:text-brand  text-white"
                      href=""
                    >
                      Terms of service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                <div className="flex items-center mb-6">
                  <a aria-label="linkedin" href="">
                    <div className="text-white cursor-pointer hover:text-brand dark:hover:text-brand">
                      <AiFillLinkedin className='text-4xl hover:text-violet-400' />
                    </div>
                  </a>

                  <a
                    aria-label="Twitter"
                    href=""
                    className="ml-4"
                  >
                    <div className=" text-white cursor-pointer hover:text-brand dark:hover:text-brand">
                      <AiFillFacebook className='text-4xl hover:text-violet-400' />
                    </div>
                  </a>

                  <a aria-label="AiFillGithub" href="">
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
        <a
          className="focus:outline-none"
          tabIndex={0}
          role="link"
          aria-label="home link"

        >
          <img
            className="dark:hidden text-white h-8 w-28 sm:h-10 "
            src="https://companieslogo.com/img/orig/EPAM-3c018a11.png?t=1660577598"
            alt=" logo"
          />

        </a>
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
