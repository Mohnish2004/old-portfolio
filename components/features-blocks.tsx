'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/HomeFace.png'

export default function Example() {
  return (
    <div className="bg-black">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" data-aos="zoom-y-out">A bit about me</h2>
          <p className="mt-4 text-white" data-aos="zoom-y-out">
          Imagine this: Life's a wild rollercoaster, and guess who's in the front seat, hands in the air, screaming with excitement? Yep, that's me! I'm a software developer by day, engaging in an epic battle of wits with lines of code. But here's the twist—when the sun sets, I transform into a photo-obsessed adventurer, capturing moments that make jaws drop and eyes widen. Oh, and let's not forget my alter ego as a badminton champion. Curiosity is my compass, and I'm always on the lookout for the next big thing.  
<br></br>
<br></br>
If my wild rollercoaster story didn't pique your curiosity, I don't know what will! But if you're intrigued and want to dive deeper into the exciting chapters of my life, then go ahead and click below!           </p>
          <div className="mt-4">
            <button type="button" data-aos="zoom-y-out" className="mt-6 inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init>Know more {'>'} </button>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/images/pic1.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="w-90 rounded-lg"
          />
        </div>
      </div>

    </div>

  );
}

