'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';


import React from 'react';
import AOS from 'aos';
import CircleText from '../components/CircleText';

export default function Hero() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <section className="relative min-h-screen my-30">
      <CircleText />
      {/* Background image */}
        <Image
        alt="Background Image"
        src="/images/experience/experience_intro.webp"
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
