'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react'



export default function Example() {
  return (

  
    <><div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative" data-aos="zoom-y-out">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"> Turning ideas into real life Products is my calling</h1>

     <div className="py-5">
      <a href="#" className="animate-bounce inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800">
        <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3 ">New</span> <span className="text-sm font-medium ">Profficient was just launched! See what's new</span>
        <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
      </div>


      <section className="cta-sec relative max-w-screen-xl mx-auto py-1 px-4 md:px-8" >
  <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
    <div className="max-w-xl">
      <h3 className="text-3xl text-white font-semibold md:text-4xl" data-aos="zoom-y-out">
      Illuminating the Path of {' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-700 to-blue-900" data-aos="zoom-y-out">Product Development</span>
      </h3>
      <p className="text-gray-300 leading-relaxed mt-4" data-aos="zoom-y-out">
      From mere lines of code, a remarkable product emerged—a portal empowering students to rate and review their professors. Profficient became the catalyst that ignited my web development journey, and in its creation, I unraveled a profound truth: Simplicity breathes life into unforgettable user experiences.


    

      </p>
      <a
        className="mt-5 px-4 py-2 text-cyan-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
        href="https://profficient.net/"
      >
        Try it out
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
    <div className="mt-1 flex items-center justify-center">
      <Image 
        src="/images/megaa.png" width={700} height={700} 
        alt="" 
        className="mx-auto rounded-lg shadow-lg" 
        style={{ width: '120%', maxWidth: 'none'}}
        data-aos="zoom-y-out"
      />
    </div>
  </div>


</section>
        <section className="cta-sec relative max-w-screen-xl mx-auto py-0 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg padding-left:20px sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-4xl text-white font-semibold md:text-4xl" data-aos="zoom-y-out">
                        From Fear to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-700 to-blue-900" data-aos="zoom-y-out">Fortitude </span>🛡
                    </h3>
                    <p className="text-gray-200 leading-relaxed mt-3" data-aos="zoom-y-in">
                    From vulnerability to resilience, I delved deep into the world of cybersecurity. Enigma Coin became my gateway, immersing me in hashing, encryption, and blockchain. Armed with knowledge, I now navigate the digital realm with unwavering confidence.
                <div className="py-5">
                   <a className="animate-float inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm">
                    <span className="animate-bounce inline-flex justify-between items-center py-1 px-3 pr-4 mb-7 text-sm rounded-full bg-gray-900 text-white"> ✨ Fun Fact: Enigma Coin is a playful nod to the legendary Alan Turing.
                    </span>      
                  </a>
                </div>
                    </p>
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <Image 
                        src="/images/Laptop1.png" width={500} height={500} 
                        alt="" 
                        className="mx-auto rounded-lg shadow-lg"
        style={{ width: '130%', maxWidth: 'none' }}
                    />
                </div>
            </div>
        </section>
        <section className="cta-sec relative max-w-screen-xl py-0 mx-auto px-4 md:px-8">
  <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
  <div className="relative z-10 gap-5 items-center lg:flex">
    <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
      <Image 
        src="/images/mobile.png" width={500} height={500} 
        alt="" 
        className="mx-auto rounded-lg shadow-lg" 
        style={{ width: '120%', maxWidth: 'none' }}
      />
    </div>
    <div className="flex-1 max-w-lg py-0 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
      <h3 className="text-3xl text-white font-semibold md:text-4xl">
      Crafting Brilliance Through{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 via-blue-700 from-blue-900">Sleepless </span>
         Endeavors
      </h3>
      <p className="text-gray-300 leading-relaxed mt-3">
      Fueled by frustration and personal necessity, I embraced a 24-hour hackathon with unwavering determination. Overcoming coding challenges, I unveiled an innovative ride-sharing app that revolutionized accessibility and affordability. This transformative journey solidified my belief in technology's power to solve real-world problems and ignited my passion for user-centric app development.

      </p>
      <div className='py-2'></div>
      <a
        className="mt-5 px-4 py-2 text-cyan-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
        href="https://devpost.com/software/pool-it-or74mp"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</section>
</div>
    </>
  );
}
