'use client'
import CircleText from '../components/CircleText';
import { useState, useEffect } from 'react'
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <div className="rotating-image-container">
          <CircleText />
        </div>
        <Image
        alt="Background Image"
        src="/images/about_intro1.webp"
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
