/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const pagination = () => {
  return (
    <div className=' p-4 m-8 flex '>
      <ul className="flex -space-x-px text-2xl px-10 ">
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-white bg-violet-700 border border-gray-300 rounded-l-lg hover:bg-violet-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-white bg-violet-700 border border-gray-300 rounded-lg hover:bg-violet-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-white bg-violet-700 border border-gray-300 rounded-lg hover:bg-violet-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="px-3 py-2 ml-0 leading-tight text-white bg-violet-700 border border-gray-300 rounded-lg hover:bg-violet-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-white bg-violet-700 border border-gray-300 rounded-lg hover:bg-violet-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-white bg-violet-700 border border-gray-300 rounded-lg hover:bg-violet-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-8 py-2 mr-0 leading-tight text-white bg-violet-700 border border-gray-300 rounded-r-lg hover:bg-violet-900 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </div>

  )
}

export default pagination
