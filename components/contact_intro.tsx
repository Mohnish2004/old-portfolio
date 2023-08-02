'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleText from '../components/CircleText';
import Image from 'next/image';


<meta property="twitter:image" content="/images/Contact/Projects3.png"></meta>


export default function Hero() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <section className="relative min-h-screen my-30">
      {/* Background image */}
      <CircleText />

        <Image
        alt="Background Image"
        src="/images/Contact/contact.webp"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        data-aos="zoom-y-out"
        style={{
          marginTop: '40px',
          marginBottom: '30px',
          backgroundColor: 'black',
        }}
          />
    </section>
  );
}
