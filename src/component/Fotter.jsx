/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Fotter = () => {
  return (
    <div className=" ">
      <footer className=" z-50 bg-violet-900">
        <div
          tabIndex={0}
          aria-label="footer"
          className="focus:outline-none border-t border-b border-gray-200 dark:border-gray-700 py-16"
        >
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white"
                        href=""
                      >
                        Components
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white"
                        href="j"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white"
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
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white"
                        href=""
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white"
                        href=""
                      >
                        Contacts
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white"
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
                        className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand  text-white"
                        href=""
                      >
                        Terms of service
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-6">
                    <a aria-label="Github" href="">
                      <div className="text-white cursor-pointer hover:text-brand dark:hover:text-brand">
                        <img
                          className="white:hidden"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1.svg"
                          alt="Github"
                        />
                        <img
                          className="dark:block hidden"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1dark.svg"
                          alt="Github"
                        />
                      </div>{" "}
                    </a>
                    <a
                      aria-label="Twitter"
                      href=""
                      className="ml-4"
                    >
                      <div className=" text-white cursor-pointer hover:text-brand dark:hover:text-brand">
                        <img
                          className="text-white "
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2.svg"
                          alt="Twitter"
                        />
                        <img
                          className="dark:block hidden"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2dark.svg"
                          alt="Twitter"
                        />
                      </div>{" "}
                    </a>
                  </div>
                  {/* className="dark:block hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop" */}


                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="py-16 flex flex-col justify-center items-center">
          <a
            className="focus:outline-none"
            tabIndex={0}
            role="link"
            aria-label="home link"
            href=""
          >
            <img
              className="dark:hidden"
              // src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg7.svg"
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
    </div >

  )
}

export default Fotter
