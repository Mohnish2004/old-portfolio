'use client'
import React from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
export default function Hero() {
    return(
      <div className=" mx-auto px-5 py-2\3 lg:px-32 lg:py-2 ">
        <br></br>
      <h1 className="text-gray-200 text-6xl font-semibold sm:text-6xl">
      Schedule a meeting !!
          </h1>
          <br></br>
        <div className="-m-1 flex snap-center flex-wrap md:-m-2 rounded-lg bg-white">
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1DZr8ubsJt5yiXGdFRbmmzX2k5H7qMWuENuPJpZiNWKIdoJEq56CqfGn6Gzynlm4E7lD3bbMJx?gv=true" className="border: 0" width="100%" height="800"></iframe>
        </div>
        
      </div>

        )}
