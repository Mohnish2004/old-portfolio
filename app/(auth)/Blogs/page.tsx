

export const metadata = {
    title: 'About me',
    description: 'This is where you can find information about me',
  }
  
import { Analytics } from '@vercel/analytics/react';
import About_intro from '@/components/about_intro'
import About_banner from '@/components/about_banner'
import About_info from '@/components/about_info'
import About_pics from '@/components/about_pics'
import Modal from '@/components/modal'


  
  export default function Home() {
    return (
      <>
      <About_intro/>
      <About_banner/>
      <About_info/>
      <Modal/>

      <div className=" mx-auto px-5 py-2\3 lg:px-32 lg:py-2 ">


      <div className="bg-black py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-10 md:mb-16">
    <h1 className="text-gray-200 text-6xl font-semibold sm:text-6xl">
    <iframe className="border-radius:12px" src="https://open.spotify.com/embed/playlist/0yIGIUWcMpxYiW2Emhibrb?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <br></br>
      Favourite Films 🎥
          </h1>
    </div>

    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

      <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://i.etsystatic.com/43778811/r/il/e6c6c1/4982576486/il_570xN.4982576486_7qi7.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        </a>

      </div>
      <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://i.etsystatic.com/22147411/r/il/5c0a06/3890833949/il_fullxfull.3890833949_aru7.jpg" loading="lazy" alt="Photo by Nick Karvounis" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

      </div>

      <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://www.spieltimes.com/wp-content/uploads/2022/12/Miles-Morales-Across-The-Spiderverse-scaled.jpg" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

      </div>

      <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://i.ebayimg.com/images/g/ZYkAAOSwbiFZW6oA/s-l1200.webp" loading="lazy" alt="Photo by Vladimir Fedotov" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>
        </div>
      </div>
    </div>
  </div>
</div>
      <About_pics/>

      <Analytics />
      </>
    )
  }