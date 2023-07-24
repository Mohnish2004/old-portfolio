'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'


export default function Example() {
  return (
    <><div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative" data-aos="zoom-y-out">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Some of my featured works</h1>
      <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">I'm driven by a deep passion for using technology to create innovative solutions that make a lasting impact. Take a relaxed stroll through these projects that I've poured my heart and soul into.</p>
      <a href="#" className="animate-bounce inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-900 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
        <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 ">New</span> <span className="text-sm font-medium text-white">Profficient was just launched! See what's new</span>
        <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </div><div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl" data-aos="zoom-y-out">Profficient</h2>
                <p className=" mb-5 text-base text-center text-white sm:text-left md:text-lg " data-aos="zoom-y-out"> {/* Reduced mt-4 to mt-2 */}
                  A web-based platform dedicated to providing UC Davis students with a time-saving and effortless experience in viewing and reviewing professors. By consolidating comprehensive and up-to-date reviews from students with firsthand experience, Profficient eliminates the need for sifting through outdated websites and forums.
                </p>
              </div>
              <div className="mt-1" data-aos="zoom-y-out"> {/* No change to mt-1 */}
              <dl>
                <dt className="font-bold text-white underline decoration-pink-500 hover:decoration--400" data-aos="zoom-y-out">Web Development</dt>
                </dl>
                <a
        className="mt-5 py-2 border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 rounded-full inline-flex items-center"
        href="https://codelabdavis.medium.com/introduction-ddb70fec369a" target="_blank"
      >
        Read Article
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>

              </div>
            </div>
            <div>
              <Image
                src="/images/92shots_so.png" width={500} height={500}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="w-90 rounded-2xl bg-gray-100" data-aos="zoom-y-out"/>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
            <div>
              <Image
                src="/images/313shots_so.png" width={500} height={500}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="w-90 rounded-2xl bg-gray-100"data-aos="zoom-y-out" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl" data-aos="zoom-y-out">Enigma Coin</h2>
                <p className="mb-5 text-base text-center text-white sm:text-left md:text-lg" data-aos="zoom-y-out"> {/* Reduced mt-4 to mt-2 */}
                  A blockchain-based cryptocurrency project developed from scratch using Python. The aim of this project was to explore the application of RSA encryption in blockchain technology. We created our own blockchain with RSA encryption and implemented various functionalities like mining, transactions, and coin buying. In addition, we developed a web platform to showcase the functioning of the Enigma Coin.
                </p>
              </div>
              <div className="mt-1"> {/* No change to mt-1 */}
              <dl>
                <dt className="font-bold text-white underline decoration-blue-500 hover:decoration--400" data-aos="zoom-y-out">Cyber Security</dt>
                </dl>
                <a
        className="mt-5 py-2 border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 rounded-full inline-flex items-center"
        href="https://github.com/Mohnish2004/EnigmaCoin.git" target="_blank"
      >
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>

              </div>
            </div>
          </div>


          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl" data-aos="zoom-y-out">Pool it</h2>
                <p className="mt-2 text-whitemb-5 text-base text-center text-white sm:text-left md:text-lg" data-aos="zoom-y-out"> {/* Reduced mt-4 to mt-2 */}
                  A mobile app developed using Flutter that allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university. It also provides a feature for delivering small packages among the student community. The app aims to simplify the process of coordinating rideshares and package deliveries, enhancing convenience for students.
                </p>
              </div>
              <div className="mt-7"> {/* No change to mt-1 */}
              <dl>
                <dt className="font-bold text-white underline decoration-yellow-500 hover:decoration--400" data-aos="zoom-y-out">APP Development</dt>
                </dl>
                <a
        className="mt-5 py-2 border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 rounded-full inline-flex items-center"
        href="https://devpost.com/software/pool-it-or74mp" target="_blank"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>

              </div>
            </div>
            <div>
              <Image
                src="/images/932shots_so.png" width={500} height={500}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                data-aos="zoom-y-out"
                className="w-90 rounded-2xl bg-gray-100" />
            </div>
          </div>
        </div>
      </div></>
  );
}
