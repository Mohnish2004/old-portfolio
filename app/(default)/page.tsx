export const metadata = {
  title: 'Home',
  description: 'Welcome to my portfolio :)',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Stats from '@/components/stats'
import Strings from '@/components/strings'
import Clients from '@/components/clients'
import Strings2 from '@/components/strings2'
import { Analytics } from '@vercel/analytics/react';



export default function Home() {
  return (
    <>
      <Hero />
      <Stats/>
      <Strings />
      <Features />
      <Strings2 />
      <FeaturesBlocks />
      <Testimonials /> /*add clients*/
      <Analytics />
    </>
  )
}