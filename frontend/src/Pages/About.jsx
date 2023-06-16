import React from 'react'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="About"
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-8xl text-3xl mb-4 font-medium text-gray-900 p-10">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello I'm Ehsan, it's nice to meet you! I'm skilled on web developer with experience in React and Express JS. I have experience working as a back end developer in Go, which is impressive. As a full stack developer, you have a wide range of skills that allow you to work on both the front end and back end of web applications. It's great to see that you're passionate about programming and I wish you all the best in your future endeavors!
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Subscribe
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-violet-300 focus:ring-2  focus:bg-transparent focus:ring-violet-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About
