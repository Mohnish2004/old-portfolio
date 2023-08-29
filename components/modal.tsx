'use client'
import { useState } from 'react';

export default function Home() {
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  return (
    <>
      {isBoxVisible && (
        <div id="cookies-with-stacked-buttons" className="fixed bottom-0 right-0 z-[60] sm:max-w-sm w-full mx-auto p-6">
          <div className="p-4 bg-white/[.6] backdrop-blur-lg rounded-xl shadow-2xl dark:bg-slate-950/[.6] dark:shadow-black/[.7]">
            <div className="flex justify-between items-center gap-x-5 sm:gap-x-10">
              <h2 className="font-semibold text-gray-800 dark:text-white">
                Hey There 👋
              </h2>
              <button type="button" className="inline-flex rounded-full p-2 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600 dark:hover:bg-gray-600 dark:text-gray-300" onClick={() => setIsBoxVisible(false)}>
                <span className="sr-only">Dismiss</span>
                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              Explore the Making-of this website: Check out my <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="https://medium.com/@mohnish.gopi/how-i-crafted-my-portfolio-c792a6a859e7">Medium</a> article on the journey
            </p>
          </div>
        </div>
      )}
    </>
  )
}