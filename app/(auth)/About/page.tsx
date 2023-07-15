import { useState, useEffect } from 'react'

export const metadata = {
    title: 'About me',
    description: 'This is where you can find information about me',
  }
  

  import About_intro from '@/components/about_intro'
  import About_banner from '@/components/about_banner'
import About_info from '@/components/about_info'
import About_pics from '@/components/about_pics'
 /*
  import About_bpics from '@/components/about_bpics'
  import About_vids from '@/components/about_vids'*/


  
  export default function Home() {
    return (
      <>
      <About_intro/>
      <About_banner/>
      <About_info/>
      <About_pics/>
      </>
    )
  }