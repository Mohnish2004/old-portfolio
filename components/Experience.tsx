'use client'
import Image from 'next/image';


export default function Example() {
  return (
    <>
    
    <div className=" mx-auto px-5 py-1 lg:px-32 lg:py-1 ">
    <div>
      <br></br>
</div>
<br></br>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap align-top">
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/exp_pics/1.jpeg" width={500} height={500} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/exp_pics/2.jpeg" width={500} height={500} />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/exp_pics/3..jpeg" width={500} height={500} />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap align-top">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/exp_pics/5.jpeg" width={500} height={500} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/exp_pics/4.jpeg" width={500} height={500} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/exp_pics/6.jpeg" width={500} height={500} />
          </div>
        </div>
      </div>
    </div><div className="mx-auto max-w-7xl py-1 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative my-3xlisolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          </svg>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600">Journey</span> so far ...
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From the sands of the Middle East to the thriving campus of UC Davis, my educational journey is a tale of cultural fusion and boundless ambition. I've bridged continents, unlocking knowledge and embracing diverse perspectives along the way.
            </p>
          </div>

          <ol className="relative border-l border-gray-800 dark:border-gray-800 ">
            <li className="mb-10 ml-6 px-4 py-5 duration-150 hover:border-gray-800 hover:rounded-xl hover:bg-gray-800">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white">University of Califorina, Davis<span className="bg-blue-900 text-blue-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Expected Graduation: June 2026</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Bachelor of Science in Computer Science & Engineering Dean's List x2</p>
              <a href="https://docs.google.com/document/d/e/2PACX-1vTx1dG5lHXLgkZOmtqWeIrbph_rc2qQ3Y1T_-d5sWrXNmuKF6kkIOQaUOr5Uww87w/pub" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={500} height={500} fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>View Latest Resume</a> 
              
            </li>
            <li className="mb-10 ml-6 px-4 py-5 duration-150 hover:border-gray-800 hover:rounded-xl hover:bg-gray-800">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={500} height={500} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">JSS Private School, Dubai</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Middle School, High School</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400"> Course - Physics, Chemistry, Math, Computer Science Deputy Headboy, House Captain, VP of editorial committee, Class Marshall. <br></br></p>
            </li>
            <li className="ml-6 px-4 py-5 duration-150 hover:border-gray-800 hover:rounded-xl hover:bg-gray-800">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={500} height={500} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">My First Breath</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 6th, 2004, Abu Dhabi</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">The day the universe witnessed awesomness for the first time</p>
            </li>
          </ol>
        </div>
      </div></>
  )
}

