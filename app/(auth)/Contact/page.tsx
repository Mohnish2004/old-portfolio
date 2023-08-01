
export const metadata = {
  title: 'Contact me',
  description: 'This is where you can find my contact information',
}

import { Analytics } from '@vercel/analytics/react';
import Contact_intro from '@/components/contact_intro'
import Calendar from '@/components/calendar';


export default function Home() {
  return (
    <>
      <Contact_intro />
      <Calendar/>
      <Analytics />
      <br></br>
    </>
  )
}