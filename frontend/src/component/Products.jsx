
import React from 'react'

const Products = () => {
  return (
    <>
      <div className='flex pt-20 py-10 justify-center'>
        <h1 className='text-black underline text-2xl font-extrabold tracking-wide uppercase'>Products</h1>
      </div>
      <section

        className="grid grid-cols-4 gap-8 sm:grid-cols-8 lg:grid-cols-12 tails-selected-element px-52 "
        contentEditable="true"
      >

        <div
          className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-gray-100 sm:rounded-xl cursor-pointer border border-violet-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            className="p-3 text-white"

          >
            <img className='w-50 h-56 ' src="https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-13-images/Nimbus-Phone-Case-Cover-For-iPhone-13.png?tr=cm-pad_resize,v-2 " alt="" />

          </div>
          <h4 className="text-xl font-medium text-black">Case &Protector</h4>

        </div>
        <div
          className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-gray-100 sm:rounded-xl cursor-pointer border border-violet-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            className="p-3 text-white"

          >
            <img className='w-50 h-56' src="https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-Free-Image-1.png" alt="" />

          </div>
          <h4 className="text-xl font-medium text-black">Headset</h4>

        </div>
        <div
          className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-gray-100 border-red-700 rounded-sm sm:rounded-xl cursor-pointer border border-violet-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div

          >
            <img className='w-50 h-56' src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/headphones/freebuds-pro-2/imgs/huawei-freebuds-pro-2-id-color2-1.png" alt="" />

          </div>
          <h4 className="text-xl font-medium text-black">EarPhone</h4>

        </div>
        <div
          className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-gray-100 sm:rounded-xl cursor-pointer border border-violet-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            className="p-3 text-white"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <img className='w-50 h-56' src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP860/series7-480.png " alt="" />

          </div>
          <h4 className="text-xl font-medium text-gray-700">Smart Whatch</h4>

        </div>
        <div
          className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-gray-100 sm:rounded-xl cursor-pointer border border-violet-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            className="p-3 text-white"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <img className='w-50 h-56' src="https://www.pngarts.com/files/9/Type-C-Charger-Adapter-PNG-Photo.png" alt="" />

          </div>
          <h4 className="text-xl font-medium text-gray-700">Charging</h4>

        </div>
        <div
          className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 bg-gray-100 sm:rounded-xl cursor-pointer border border-violet-600"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            className="p-3 text-white"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <img className='w-50 h-56' src="https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/speakers/sound-x-2021/specs/sound-x-2021-specs.png" alt="" />

          </div>
          <h4 className="text-xl font-medium text-gray-700">Speake & Stand .... </h4>

        </div>
      </section>
    </>



  )
}

export default Products
