
export const metadata = {
  title: 'My Projects',
  description: 'This is where you can discover my work',
}
import Testimonials from '@/components/testimonials'
import Stats from '@/components/stats2'
import Clients from '@/components/clients'
import Project_intro from '@/components/projects_intro'
import Project_banner from '@/components/projects_banner1'
import Project_features from '@/components/project_features'
import Project_listings from '@/components/project_listings'
import Project_banner_2 from '@/components/projects_banner2'
import Project_banner_3 from '@/components/projects_banner3'
import { Analytics } from '@vercel/analytics/react';
import Modal from '@/components/modal'



export default function Home() {
  return (
    <>
      <Project_intro />
      <Stats/>
      <Project_banner />
      <Project_features />
      <Project_listings />
      <Project_banner_3 />
      <Project_banner_2 />
      <Testimonials/>
      <Analytics />
      <Modal/>

      
    </>
  )
}