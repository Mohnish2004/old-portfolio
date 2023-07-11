'use client'
import CircleText from '/Users/mohnish/Desktop/tailwind-landing-page-template/components/CircleText.js';


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
          backgroundImage: `url('/images/HomeF3.png')`,
          backgroundSize: '95%',
          backgroundPosition: 'center',
          marginTop: '40px',
          marginBottom: '30px',
          backgroundColor: 'black',
        }}
      />
    </section>
  );
}
