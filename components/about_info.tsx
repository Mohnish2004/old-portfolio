'use client'
import React, { useState } from 'react';



export default function Hero() {
    return(
      <><section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Clear overview for efficient tracking</h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
            </p>
            <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
          </div>
          <div className="w-full h-full py-48 bg-gray-900"></div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Decide how you integrate Payments</h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
              scratch.
            </p>
            <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
          </div>
          <div className="w-full h-full py-48 bg-gray-200"></div>
        </div>
      </section><section className="px-4 py-20 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
            <div>
              <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl">Become a Partner</h2>
              <p className="mb-6 text-lg text-center text-gray-600 sm:text-left md:text-xl">Let's put our heads together to build a successful partnership to benefit both your customers and your business.</p>
              <a href="#" className="w-full btn btn-primary btn-lg sm:w-auto">Become a Partner</a>
            </div>
            <div className="flex flex-col flex-grow space-y-5">
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">Email APIs, SMTP Relay, and Webhooks</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">Suppression Management</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">Email Tracking and Analytics</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">99.99% Guaranteed Uptime SLA</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">5 Days of Log Retention</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">Limited 24/7 Ticket Support</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">1 Dedicated IP (Foundation 100k and up)</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">1,000 Email Address Validations</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">Host events together or get your event sponsored</p>
              </div>
              <div className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="text-lg text-gray-700">Reach 90,000 customers via our integration page</p>
              </div>
            </div>
          </div>
        </section></>

   
        )}
