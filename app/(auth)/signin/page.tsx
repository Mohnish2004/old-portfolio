export const metadata = {
  title: 'My Experience',
  description: 'This is where you can see my past experiences',
}

import Testimonials from '@/components/testimonials'
import Stats from '@/components/stats'
import Clients from '@/components/clients'
import Experience_intro from '@/components/experience_intro'
import Experience_banner_1 from '@/components/experience_banner1'
import Experience_banner_2 from '@/components/experience_banner2'
import Experience_banner_3 from '@/components/experience_banner3'
import Experience from '@/components/Experience'
import Experience_accordian from '@/components/Experience_accordian'


export default function Home() {
  return (
    <>
      <Experience_intro />
      <Experience_banner_2 />
      <Experience_banner_1 />
      <Experience />
      <Experience_accordian/>
      <Experience_banner_3 />
      <Clients />
      <Testimonials />
    </>
  )
}