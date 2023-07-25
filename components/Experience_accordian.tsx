'use client'
import React, { useState } from 'react';
import { useEffect } from 'react'
import Image from 'next/image';

const members = [
  
    {
        company_icon: <svg className="w-24 h-24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <mask id="circle-mask">
          <circle cx="24" cy="24" r="24" fill="white" />
        </mask>
        <image href="/images/codelab1.png" mask="url(#circle-mask)" width="48" height="48" />
      </svg>
        ,
        company_name: "CodeLab",
        job_title: "Product Manager",
        job_description: "Led cross-functional teams in Agile sprint planning, full-stack development (MERN), and secure Google Authentication integration for the 'Profficient' professor rating web platform at UC Davis. Achieved a 94% improvement in development efficiency by tracking progress and coordinating code/design contributions. Implemented product strategies through research and ideation, ensuring customer demands were met and delivering an efficient user experience.         ",
        job_type: "Part-time",
        location: "Davis, California",
        duration: "January 2023 – Present",
        path: "javascript:void(0)"
    },
    
    {
      company_icon: <svg className="w-8 h-8" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_715_1824)">
              <path d="M34.6588 17.9031C34.6588 16.7135 34.5623 15.5175 34.3565 14.3472H17.85V21.0861H27.3025C26.9103 23.2595 25.6499 25.1822 23.8044 26.4039V30.7765H29.4438C32.7554 27.7286 34.6588 23.2274 34.6588 17.9031Z" fill="#4285F4" />
              <path d="M17.85 35.0011C22.5698 35.0011 26.5502 33.4514 29.4502 30.7764L23.8109 26.4038C22.2419 27.4712 20.2163 28.0757 17.8564 28.0757C13.2909 28.0757 9.41989 24.9956 8.03095 20.8545H2.21155V25.3621C5.18234 31.2715 11.2332 35.0011 17.85 35.0011Z" fill="#34A853" />
              <path d="M8.02451 20.8547C7.29146 18.6813 7.29146 16.3278 8.02451 14.1544V9.64673H2.21154C-0.270546 14.5916 -0.270546 20.4174 2.21154 25.3623L8.02451 20.8547Z" fill="#FBBC04" />
              <path d="M17.85 6.92659C20.3449 6.88801 22.7563 7.82683 24.5632 9.55014L29.5595 4.55382C26.3958 1.58303 22.1968 -0.0502629 17.85 0.0011793C11.2332 0.0011793 5.18234 3.73074 2.21155 9.6466L8.02452 14.1542C9.40703 10.0067 13.2845 6.92659 17.85 6.92659Z" fill="#EA4335" />
          </g>
          <defs>
              <clipPath id="clip0_715_1824">
                  <rect width="35" height="35" fill="white" />
              </clipPath>
          </defs>
      </svg>
      ,
      company_name: "Google Developers Student Club",
      job_title: "Executive Technical Lead",
      job_description: "Led innovative cybersecurity projects, leveraging diverse data sources to identify and address threats. Developed secure solutions, including a password manager and blockchain-based cryptocurrency. Recognized for outstanding performance and awarded multiple accolades among 25 competing teams.      ",
      job_type: "Part-time",
      location: "Davis, California",
      duration: "October 2022 – Present",
      path: "javascript:void(0)"
  },

     {
        company_icon: <svg className="w-20 h-20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <mask id="circle-mask">
          <circle cx="24" cy="24" r="24" fill="white" />
        </mask>
        <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/The_University_of_California_Davis.svg/2048px-The_University_of_California_Davis.svg.png" mask="url(#circle-mask)" width="48" height="48" />
      </svg>
      ,
        company_name: "Undergraduate admissions",
        job_title: "Student Ambassador",
        job_description: "As a Certified Campus Tour Guide and Student Ambassador, I represented UC Davis with pride and professionalism. Engaging with prospective students and stakeholders, I effectively showcased the university's values, accomplishments, and unique opportunities.        ",
        job_type: "Part-time",
        location: "Davis, California",
        duration: "January 2023 – Present",
        path: "javascript:void(0)"
    }
]








export default function Hero() {
    return(
      <section className="py-10">
        <div className=" mx-auto px-5 py-1 lg:px-32 lg:py-1 ">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/7.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/8.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/9.jpeg" alt={''} width={500} height={500}
        />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/10.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/11.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/14.jpeg" alt={''} width={500} height={500}
        />
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="w-100">
            <h1 className="text-white text-3xl font-extrabold sm:text-5xl">Technical experience</h1>
            <p className="text-gray-300 mt-2 ">Constantly looking for opportunities, and love to explore new territories. Follow my LinkedIn below to stay updated on my career :)</p>
            <br></br>

            <a href="https://www.linkedin.com/in/mohnish-gopi/" target="_blank" className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Linkedin</a>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTx1dG5lHXLgkZOmtqWeIrbph_rc2qQ3Y1T_-d5sWrXNmuKF6kkIOQaUOr5Uww87w/pub" target="_blank" className="text-sm px-4 font-semibold leading-6 text-white">
              View Resume <span aria-hidden="true"></span>
            </a>
          </div>
          <ul className="mt-12 divide-y space-y-3 divide-black">
            {members.map((item, idx) => (

              <li key={idx} className="p-5 md:p-6 duration-150 hover:border-gray-800 hover:rounded-xl hover:bg-gray-800">
                <a href={item.path} className="space-y-3 block">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.company_icon}
                    </div>
                    <div>
                      <span className="block text-lg text-white font-extrabold">{item.company_name}</span>
                      <h3 className="text-base text-orange-600 font-semibold mt-1">{item.job_title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-100 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-white flex items-center gap-6">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z" fill="#9CA3AF" />
                        <path d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z" fill="#9CA3AF" />
                      </svg>
                      {item.job_type}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-nlack" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="#9CA3AF" />
                      </svg>
                      {item.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                      {item.duration}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
<br></br>
<br></br>
<br></br>
<br></br>
        <div className=" mx-auto px-5 py-1 lg:px-32 lg:py-1 ">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/33.jpg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/38.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/19.JPG" alt={''} width={500} height={500}
        />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/13.jpeg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/32.jpg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/29.jpg" alt={''} width={500} height={500}
        />
      </div>
    </div>
  </div>
</div>




        <div className="bg-black py-6 sm:py-8 lg:py-12">

          <div className="mx-auto max-w-screen-2xl">

            <div className="mx-auto max-w-screen-4xl px-1 md:px-10">
              <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                <div className="w-100">
                  <h1 className="text-white text-2xl font-extrabold sm:text-4xl">Other accomplishments</h1>
                </div>
                </div>
                </div>
                <div className="bg-black py-6 sm:py-8 lg:py-12">

                  
        <div className="scroll">
  <div className="m-scroll">
    <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/200.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/201.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/202.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/203.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/204.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/205.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/206.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/207.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/210.png" alt={''} width={400} height={200}
        />
      </div>
      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/208.png" alt={''} width={400} height={200}
        />
      </div>      <div className="flex w-1/2 flex-wrap align-top">
        <Image
          
          className="block h-90 w-90 rounded-lg object-cover object-center"
          src="/images/exp_pics/211.png" alt={''} width={400} height={200}
        />
      </div>


</div>
</div>   
<br></br>

<div className="max-w-screen-lg mx-auto px-4 md:px-8">
                <div className="grid gap-0 sm:grid-cols-2 sm:gap-y-2 xl:grid-cols-2">
                  <div className="relative rounded-lg duration-150 hover:border-gray-900 hover:rounded-xl hover:bg-gray-800 bg-black p-5 pt-8">
                    <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">Years of Leadership Experience</h3>
                    <p className="text-gray-500 ">Executive Tech Lead, Events lead, Project Manager, Deputy Head Boy, House Captain, Class Marshall and Vice President of Editorial Committee.</p>
                  </div>
                  <div className="relative rounded-lg duration-150 hover:border-gray-900 hover:rounded-xl hover:bg-gray-800 bg-black p-5 pt-8">
                    <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">Technical Skills</h3>
                    <p className="text-gray-500">Programming: Python, C, C++, JavaScript, HTML, CSS, SQL, Web Development ( MongoDB, Express.js, React.js, Node.js ), App Development (Kotlin, Flutter, Dart, Swift )</p>
                  </div>
                  <div className="relative rounded-lg duration-150 hover:border-gray-900 hover:rounded-xl hover:bg-gray-800 bg-black p-5 pt-8">
                    <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">Relevant course</h3>
                    <p className="text-gray-500">Discrete Mathematics, Linear Algebra, Data Structures & Algorithms, Ethics in an Age of Technology, Computer Organization & Machine-Dependent Programming, Software Development & Object-Oriented Programming in C++, Calculus I, II & III</p>
                  </div>

                  <div className="relative rounded-lg duration-150 hover:border-gray-900 hover:rounded-xl hover:bg-gray-800 bg-black p-5 pt-8">
                    <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">Online Courses</h3>
                    <p className="text-gray-500">CS 50 Harvard, AI for Everyone (Intel AI Aware 2021), Getting Started with Python (University of Michigan - Coursera), Intro to AI (Deeplearning), Probability and Data with R (Duke University - Coursera)</p>
                  </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 sm:gap-y-10 xl:grid-cols-1">
                  <div className="relative rounded-lg duration-150 hover:border-gray-900 hover:rounded-xl hover:bg-gray-800 bg-black p-5 pt-8">
                    <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">Extra curricular accolades</h3>
                    <p className="text-gray-500">Dean's Honor List, Best Presentation award, individual standout award & Best Beginner Project award @GDSC , Best in Leveraging of Data/Computation @ 2023 AIFS Apps for Food and Ag Hackathon, x2 VIRTUOSO AWARD, Best Position Paper @ Model United Nations, 5 x Best Speaker @ Toastmasters International, Badminton, Runner up @ Men's doubles Tournament</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>




  <div className=" mx-auto px-5 py-1 lg:px-32 lg:py-1 ">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/22.jpg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/20.JPG" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/16.jpeg" alt={''} width={500} height={500}
        />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap align-top">
      <div className="w-full p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/27.jpg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/23.jpg" alt={''} width={500} height={500}
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/images/exp_pics/30.jpg" alt={''} width={500} height={500}
        />
      </div>
    </div>
  </div>
</div>

      </section>
        )}
