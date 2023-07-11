'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleText from '/Users/mohnish/Desktop/tailwind-landing-page-template/components/CircleText.js';
import Link from 'next/link';

export default function Hero() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <section className="relative min-h-screen my-30">
      {/* Background image */}
      <CircleText />
      <div
        className="relative h-full w-full my-30 background-image"
        data-aos="zoom-y-out"
        style={{
          backgroundImage: `url('/images/Contact/Projects3.png')`,
          backgroundSize: '93%',
          backgroundPosition: 'center',
          marginTop: '40px',
          marginBottom: '5px',
          backgroundColor: 'black',
        }}
      >
        </div>
    </section>
  );
}
