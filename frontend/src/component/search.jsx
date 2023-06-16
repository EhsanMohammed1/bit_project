import React from 'react'

const search = () => {
  return (
    <>
      <div className="mt-6 flex justify-center w-[700px] gap-8 p-4 ">
        <div className='flex  items-center gap-1'>
          <input
            type="text"
            placeholder="Search for the products you like"
            className="w-full  px-3 h-12 rounded-lg border-2 border-violet-500 focus:outline-none focus:border-violet-500"
          />
          <button
            type="submit"
            className=" text-white  bg-violet-700 h-12 hover:bg-violet-800 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg  text-lg px-7 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          >
            Search
          </button>
        </div>

      </div>

    </>
  )
}

export default search
