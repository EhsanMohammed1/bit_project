import React from 'react'

const search = () => {
  return (
    <>

      <div className=' relative  bg-violet-900 lg-1/4 px-10 py-8'>


        <div className="abslute   ">

          <input
            type="search"
            id="default-search"
            className="block indent-5 w-full p-3 md:p-4 pl-10 text-sm md:text-base text-gray-900"
            placeholder="Search brand, category, product name ..."
          />
          <button
            type="submit"
            class="text-white absolute right-12 bottom-10 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm md:text-base px-4 py-2 dark:bg-bray-600 dark:bray:bg-blue-700 dark:focus:ring-violet-800"
          >
            Search
          </button>
        </div>
      </div>
    </>
  )
}

export default search
