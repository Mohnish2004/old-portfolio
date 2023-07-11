'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import BannerImage from '/public/images/ui.png'; // Replace with the path to your banner image
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
    <section className="relative pt-10 md:pt-20">
      {/* Banner section */}
      <div className="max-w-6xl mx-auto px-100 sm:px-0" data-aos="zoom-y-out">
        <div className="relative">
          <Image src={BannerImage} alt="Banner Image" layout="responsive" />
        </div>
      </div>
      
    </section>
  );
}
