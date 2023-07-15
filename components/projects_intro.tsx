'use client'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import CircleText from '../components/CircleText';
import Image from 'next/image';


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
        src="/images/Projects3.png"
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
