'use client'
import CircleText from '../components/CircleText';
import { useState, useEffect } from 'react'


export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <div className="rotating-image-container">
          <CircleText />
        </div>
      <div
        className="absolute h-full w-full my-20 background-image"
        data-aos="zoom-y-out"
        style={{
          backgroundImage: `url('/images/about_intro1.png')`,
          backgroundSize: '93%',
          backgroundPosition: 'center',
          marginTop: '40px',
          marginBottom: '30px',
          backgroundColor: 'black',
        }}
      />
    </section>
  );
}
