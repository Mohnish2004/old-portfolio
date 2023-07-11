'use client'
import { SetStateAction, useState } from "react"

import Image from 'next/image';
    const posts = [

      {
        title: "Profficient",
        desc: " A web-based platform dedicated to providing UC Davis students with a time-saving and effortless experience in viewing and reviewing professors. Profficient eliminates the need for sifting through outdated websites and forums.",
        img: "/images/Project_Thumbnails/Cover.png",
        date: "Jan 4 2022",
        href: "javascript:void(0)",
        type: "Cyber Security"

    },
      {
          title: "Pool it",
          desc: "A mobile app developed using Flutter that allows UC Davis students to easily connect and rideshare with fellow students or family members traveling from the university. ",
          img: "/images/Project_Thumbnails/47.png",
          date: "Jan 4 2022",
          href: "https://devpost.com/software/pool-it-or74mp",
          type: "App Dev"
      },

      {
          title: "Enigma Coin",
          desc: " A blockchain-based cryptocurrency project, Explores the application of RSA encryption in blockchain technology.  ",
          img: "/images/313shots_so.png",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
          type: "Web Dev"

      },
      {
        title: "Enigma Vault",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "/images/Project_Thumbnails/255shots_so.png",
        date: "Jan 4 2022",
        href: "javascript:void(0)",
        type: "Web Dev",
        
    },

    
      {
          title: "Slice",
          desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
          img: "/images/Project_Thumbnails/93.png",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
          type: "Web Dev"
      },

      {
        title: "Hustle",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "/images/Project_Thumbnails/851shots_so.png",
        date: "Jan 4 2022",
        href: "javascript:void(0)",
        type: "Web Dev",
        
    },


  ]
  
  export default function Projects() {
    const postsPerPage = 6; // Number of posts to show per page
  
    const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate the index of the first and last post to display on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Function to handle page navigation
    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);
  
    return (
      <section className="py-5">

        {/* Content */}
        <div className="max-w-screen-xl mx-auto px-5 md:px-10">
          {/* Title and description */}
          <div className="space-y-0 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-800 to-blue-950 text-6xl font-extrabold sm:text-6xl from-light" data-aos="zoom-y-out">Projects</h1>
            <p className="text-gray-300 py-3 text-medium font-semibold" data-aos="zoom-y-out">Here are some of the projects that I’ve made trying to put my dent in the universe ✨. 
</p>
<div className="py-2"></div>
<a href="https://github.com/Mohnish2004">
<button type="button" className="text-white font-semibold bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2" >
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path href="https://github.com/Mohnish2004" fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  </svg>
  View my Github
</button>
</a>
          </div>
          {/* Project list */}
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3" data-aos="zoom-y-out">
            {currentPosts.map((item, index) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={index}>
                <a href={item.href}>
                  <div className="h-full w-full bg-gray-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 shadow-md">
                    <img src={item.img} alt={item.title} className="h-56 w-full rounded-xl object-cover shadow-xl object-center transition duration-200 group-hover:scale-110" />
                    <div className="mt-3 space-y-2">
                      <span className="block font-extrabold text-white text-sm">{item.date}</span>
                      <div className="flex items-center justify-between">
                        <h3 className="flex items-center text-lg text-gray-300 group-hover:text-cyan-600 font-semibold">
                          {item.title}
                        </h3>
                        <span className="flex items-start justify-between rounded-full bg-blue-50 shadow px-2 py-1 -mt-1 text-xs group-hover:text-cyan-600 font-semibold text-black-600">{item.type}</span>
                      </div>
                      <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-600">{item.desc}</p>
                    </div>

                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-2 rounded-full text-white ${currentPage === index + 1 ? "bg-black" : "bg-blue-800"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>


      </section>
    );
  }
  