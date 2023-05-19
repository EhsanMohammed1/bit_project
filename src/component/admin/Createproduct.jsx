/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'



const Createproduct = () => {
  return (

    <>

      <div className=" w-full  p-8 mt-8 ">
        <h1 className='mb-2 block text-2xl font-semibold  px-10'>upload products</h1>
        <div className=" w-full max-w-4xl bg-violet-100">
          <form
            className="py-6 px-9"
            action="https://formbold.com/s/FORM_ID"
            method="POST"
          >
            <div className="mb-5">

              <input
                type="email"
                name="email"
                id="email"
                placeholder="product name"
                className="w-full rounded-md border border-violet-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-violet-500 focus:shadow-md"
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold ">
                Upload File
              </label>
              <div className="mb-8">
                <input type="file" name="file" id="file" className="sr-only" />
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold ">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-gray-500">
                      Or
                    </span>
                    <button className="inline-flex rounded border border-violet-800 py-3 px-8  font-semibold text-violet-900">
                      Browse
                    </button>
                  </div>
                </label>
              </div>


            </div>
            <div>
              <button className="hover:shadow-form  rounded-md bg-violet-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>





  )
}

export default Createproduct
