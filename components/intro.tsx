'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/HomeFace.png'

export default () => {
  return (
    <section className="bg-black">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Some of my featured works</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">I'm driven by a deep passion for using technology to create innovative solutions that make a lasting impact. Take a relaxed stroll through these projects that I've poured my heart and soul into. Let's dive in and explore what we can achieve together!"</p>
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Profficient was just launched! See what's new</span> 
            <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</section>
  )
}