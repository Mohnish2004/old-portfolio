'use client'
import React from 'react';
import { useState, useEffect } from 'react'




export default function Hero() {
    return(

      <div className=" mx-auto px-5 py-2\3 lg:px-32 lg:py-2 ">
      <h1 className="text-gray-200 text-6xl font-semibold sm:text-6xl">
      Through My Lens
          </h1>
        <br></br>
        <br></br>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex py-2 w-1/2 flex-wrap align-top">
            <div className="w-1/2  p-2 md:p-3">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/1.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/2.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/3.webp" />
            </div>
          </div>
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/4.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/151.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-50 w-full rounded-lg object-cover object-center"
                src="/images/about_pics/152.jpg" />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/7.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/8.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/100.webp" />
            </div>
          </div>
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/20.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/11.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-50 w-full rounded-lg object-cover object-center"
                src="/images/about_pics/104.webp" />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/13.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/30.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/48.webp" />
            </div>
          </div>
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/16.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/17.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-50 w-full rounded-lg object-cover object-center"
                src="/images/about_pics/18.webp" />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/31.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/32.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/33.webp" />
            </div>
          </div>
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/37.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/38.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-50 w-full rounded-lg object-cover object-center"
                src="/images/about_pics/39.webp" />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/45.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/42.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/43.webp" />
            </div>
          </div>
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/40.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/46.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-50 w-full rounded-lg object-cover object-center"
                src="/images/about_pics/47.webp" />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/53.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/51.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/50.webp" />
            </div>
          </div>
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/49.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/102.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-50 w-full rounded-lg object-cover object-center"
                src="/images/about_pics/103.webp" />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/55.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/56.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/62.webp" />
            </div>
          </div>
          <div className="flex w-1/2 py-2 flex-wrap align-top">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/61.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/images/about_pics/59.webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-50 w-full rounded-lg object-cover object-center"
                src="/images/about_pics/63.webp" />
            </div>
          </div>
        </div>
        
      </div>

        )}
