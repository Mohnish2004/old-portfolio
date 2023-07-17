'use client'
import CircleText from '../components/CircleText';
import { useState, useEffect } from 'react'
import Image from 'next/image'
const centeredAlertStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
  marginRight: '370px'
};



export default function Hero() {
  return (
    
    <section className="relative min-h-screen">
      {/* Background image */}
      
      <div className="rotating-image-container">
          <CircleText />
        </div>
        <Image
        alt="Background Image"
        src="/images/homep.png"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        data-aos="zoom-y-out"
        className='relative'
        style={{
          marginTop: '40px',
          marginBottom: '30px',
          backgroundColor: 'black',
        }}
          />



    </section>
    
  );
}
