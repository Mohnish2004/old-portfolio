import Logo from './logo'
import { useState, useEffect } from 'react'



export default function Footer() {
  return (
    
    
<footer className="bg-black" id="footer">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <Logo /></a>
                <form onSubmit={(e) => e.preventDefault()}>
  <label className="block pt-4 pb-2 text-white">Lets connect</label>
  <div className="max-w-sm flex border border-black rounded-md">
    <a  href="https://calendar.google.com/calendar/appointments/AcZssZ3v3WNqru-XQpPB_dsgAkq7b91P6NPwmkp2nMc=?gv=true" target="_blank" className="p-2.5 rounded-md text-black bg-white outline-black shadow-md focus:shadow-none">
      Schedule a meeting 
    </a>
  </div>
</form>


          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Social</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                          <a href="https://www.instagram.com/mohniiiish/" target="_blank" className="hover:underline">Instagram</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://discordapp.com/users/beep_boop_10" target="_blank" className="hover:underline">Discord</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://twitter.com/MohnishGopi" target="_blank" className="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Profile</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/Mohnish2004" target="_blank" className="hover:underline ">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.linkedin.com/in/mohnish-gopi/" target="_blank" className="hover:underline">Linkedin</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://mohnish-portfolio.vercel.app/" target="_blank" className="hover:underline">Portfolio</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="Tel:(510)946-9930">(510)946-9930</a>
                      </li>

                      <li className="mb-4">
                          <a href="mailto:mohnishgopi@gmail.com">mohnishgopi@gmail.com</a>
                      </li>
                      <li>
                          <a>mgopi@ucdavis.edu</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <div className="text-sm text-gray-500 dark:text-gray-400">
      <span className="block">All Rights Reserved ©</span>
  <span className="block">Made with ❤️ by Mohnish Gopi™</span>
  

</div>

    </div>
</footer>

  )
}
