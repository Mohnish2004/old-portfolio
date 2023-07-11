'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import CircleText from '../components/CircleText';


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
