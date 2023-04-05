import React from 'react'

const Brands = () => {
  return (
    <div>
      <>
        <div className='flex pt-20 py-10 justify-center'>
          <h1 className='text-black underline text-2xl font-extrabold tracking-wide uppercase'>our brands</h1>
        </div>
        <section

          className="grid grid-cols-4 gap-8 sm:grid-cols-8 lg:grid-cols-12 tails-selected-element px-72 "
          contentEditable="true"
        >

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-white "
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="pt-8 text-white w-58 "

            >
              <img className='w-50 h-56 cursor-pointer' src="https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-logo-communication-13.png " alt="" />

            </div>
          </div>

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-white "
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className=" text-white w-58  pt-5 "

            >
              <img className='w-50 h-56 cursor-pointer' src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="" />

            </div>

          </div>

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-24 space-y-4 bg-white w-58  p-5"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div

            >
              <img className=' cursor-pointer ' src="https://seeklogo.com/images/C/cat-machinery-logo-0D2946DA1A-seeklogo.com.png" alt="" />

            </div>

          </div>
          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-white"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="p-3  w-52"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              <img className='cursor-pointer' src="https://cdn.worldvectorlogo.com/logos/razer.svg" alt="" />

            </div>

          </div>
          <div
            className="flex flex-col items-center justify-between col-span-4 px-8  space-y-4 bg-white"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="pt-20 text-white w-52"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              <img className=' cursor-pointer' src="https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-logos-marcas-8.png" alt="" />

            </div>

          </div>
          <div
            className="flex flex-col items-center justify-between col-span-4  py-10 space-y-4 bg-white"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="pt-20 text-white w-52"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              <img className='cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Anker_logo.svg/1280px-Anker_logo.svg.png" alt="" />

            </div>

          </div>
        </section>
      </>

    </div>
  )
}

export default Brands
