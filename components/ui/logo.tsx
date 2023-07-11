import Link from 'next/link'
import Image from 'next/image'
import TestimonialImage from '@/public/images/Mohnish..png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="relative" src={TestimonialImage} width={130} height={150} alt="Testimonial 01" />
    </Link>
  )
}
