import { useState, useEffect } from 'react'

export const metadata = {
  title: 'Contact me',
  description: 'This is where you can find my contact information',
}

import { Analytics } from '@vercel/analytics/react';
import Contact_intro from '@/components/contact_intro'
import Testimonials from '@/components/testimonials';


export default function Home() {
  return (
    <>
      <Contact_intro />
      <Analytics />
      <br></br>
    </>
  )
}