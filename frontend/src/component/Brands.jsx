/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Brands = () => {
  return (
    <>
      {/* Container for demo purpose */}
      <div className="container my-24 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    "
            }}
          />
          <h2 className="mb-12 text-center text-3xl font-bold">
            OUR BRANDS
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <img
                src="https://i.itworldcanada.com/wp-content/uploads/2019/07/huawei-logo.jpg"
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">
                      HUAWEI
                    </h5>
                  </div>
                </div>
                <div>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </a>
            </div>
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <img
                src="https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2023/02/shutterstock_632202071.jpg"
                alt='APPLE'
                className="w-full align-middle transition duration-300 ease-linear "

              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">
                      APPLE                    </h5>
                  </div>
                </div>
                <div>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </a>
            </div>
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <img
                src="data:image/png;base64,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"
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">CAT</h5>
                  </div>
                </div>
                <div>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </a>
            </div>
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <img
                src="https://cdn.dribbble.com/users/3144264/screenshots/16346001/e-ddfsfwyaqafg-.png"
                className="w-full align-middle transition duration-300 ease-linear "
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">RAZER</h5>
                  </div>
                </div>
                <div>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </a>
            </div>
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <img
                src="https://i0.wp.com/logotaglines.com/wp-content/uploads/2017/08/Xiaomi-logo.jpg?fit=1085%2C765&ssl=1"
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">
                      XIAOMI
                    </h5>
                  </div>
                </div>
                <div>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </a>
            </div>
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <img
                src="https://logowik.com/content/uploads/images/anker2729.jpg"
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">
                      ANKER
                    </h5>
                  </div>
                </div>
                <div>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>

  )
}

export default Brands
