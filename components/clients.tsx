'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import BannerImage from '/public/images/Clients.png'; // Replace with the path to your banner image

export default function Stats() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative pt-16 md:pt-4">
      {/* Banner section */}
      <div className="max-w-6xl mx-auto px-100 sm:px-0">
        <div className="relative" data-aos="zoom-y-out" >
          <Image src={BannerImage} alt="Banner Image" layout="responsive" />
        </div>
      </div>
      
    </section>
  );
}
