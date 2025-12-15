"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  return (
    
       
<div className="min-h-screen bg-gradient-to-b overflow-hidden from-slate-50 to-white">
 {/* background */}
        <div className="relative w-full h-165  overflow-hidden shadow-lg ">
          <Image
            src="/background.png"
            alt="Important Person"
            width={800}
            height={800}
            className="object-cover w-full h-full blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* Inner content container */}
            <div className="flex flex-col items-center text-center p-6 lg: max-w-3xl mx-auto leading-relaxed px-4">
              <h1 className="text-6xl font-bold font-serif text-white mb-4">
                About Us
              </h1>
              <p className="font-lato  text-white text-base ">
                Welcome to the IEEE Student Branch at NIT Patna (NITP). As a vibrant community
                of young engineers, we are dedicated to advancing innovation, learning, and
                collaboration in the field of technology. Our branch serves as a platform where
                students connect, collaborate, and enhance their skills.
              </p>

              <button
                className="bg-[#1A66AD] mt-5 text-white px-4 py-2 rounded-lg hover:bg-[#155a94] transition"
                onClick={() => {
                  const el = document.getElementById("ieee");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                See More
              </button>
            </div>
          </div>
        </div>

        {/* Inspiration section */}
    <section className="py-16 px-8 lg:px-20 " style={{ backgroundColor: '#C7D9F0' }}>
      <div className="max-w-7xl mx-auto pt-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
            Our Source Of Inspiration
          </h2>
          {/* Scrbble part */}
          <div className="flex justify-center">
  <svg width="200" height="20" viewBox="0 0 200 20">
    {/* Top Line */}
    <path d="M20 6 Q100 0 180 6" stroke="#3B82F6" strokeWidth="5" fill="none" strokeLinecap="round" />
    {/* Middle Line */}
    <path d="M30 10 Q100 6 170 10" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Bottom Line */}
    <path d="M40 14 Q100 10 160 14" stroke="#93C5FD" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
</div>
        </div>

        <div className="grid lg:grid-cols-2 m-5 items-center">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-5" style={{ color: '#2563EB' }}>
              Prof. P.K. Jain
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-base">
              We are blessed to find ourselves lucky to be the part of this institution which is directed by our motivational, inspirational, enthusiastically, highly legitimate and highly knowledgeable personality Prof. P.K Jain. Whenever we have stumbled with some problems, a piece of advice or direction from his side have made our path crystal clear. His righteousness has always guided us to traverse the correct path. He has always motivated us to improve and bring the best of us. He is the major source of inspiration for all of us...
            </p>
                <a
  href="https://www.nitp.ac.in/Institute/Director"
  target="_blank"
  rel="noopener noreferrer"
  className="relative px-8 py-3 text-gray-900 font-medium rounded-tl-full rounded-tr-full rounded-br-full shadow-md overflow-hidden"
  style={{ backgroundColor: '#5FD4F4' }}
>
  View More
  <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full"></div>
</a> 
        {/* Image Background */}
          </div>

          <div className="relative flex items-center justify-center min-h-[400px]">
            <svg className="absolute" width="550" height="400" viewBox="0 0 550 400" style={{ top: '-20px', right: '-50px' }}>
              <path d="M350 50 Q480 80 500 200 Q490 340 350 380 Q200 360 150 240 Q160 100 300 60 Q350 50 350 50" fill="#7DD3C0" opacity="0.6"/>
            </svg>
            
            <div className="absolute top-12 left-12" style={{ color: '#3B82F6' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="20" y1="0" x2="20" y2="40"/>
                <line x1="0" y1="20" x2="40" y2="20"/>
                <line x1="8" y1="8" x2="32" y2="32"/>
                <line x1="32" y1="8" x2="8" y2="32"/>
              </svg>
            </div>

            <div className="absolute top-20 right-12 w-12 h-12 border-4 rounded-md transform rotate-12" style={{ borderColor: '#60A5FA' }}></div>

            <div className="absolute bottom-28 right-24 w-10 h-10 rounded-md transform -rotate-12" style={{ backgroundColor: '#F9A8D4' }}></div>

            <div className="relative z-10">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl" style={{ backgroundColor: '#7DD3C0' }}>
                <img
                  src="/director.jpg"
                  alt="Prof. P.K. Jain"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <svg className="absolute -bottom-8 -right-16" width="150" height="70" viewBox="0 0 150 70">
                <path d="M10 35 Q25 20 40 35 T70 35 T100 35 Q115 30 130 40" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    {/* IEEE Section */}
<section  id="ieee" className=" py-16 px-8  lg:px-20"  >
  <div className="max-w-7xl mx-auto ">
    
    <div className="text-center mb-5">
      <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
        IEEE
      </h2>
      <div className="flex justify-center">
  <svg width="200" height="20" viewBox="0 0 200 20">
    {/* Top Line */}
    <path d="M20 6 Q100 0 180 6" stroke="#3B82F6" strokeWidth="5" fill="none" strokeLinecap="round" />
    {/* Middle Line */}
    <path d="M30 10 Q100 6 170 10" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Bottom Line */}
    <path d="M40 14 Q100 10 160 14" stroke="#93C5FD" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
</div>

    </div>
   <div className="flex flex-col items-start">
      {/* IEEE Logo */}
      <div className="w-40 h-40 rounded flex items-center justify-start ">
        <img
          src="/ieee.png"
          alt="IEEE Icon"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Paragraph */}
      <div className="max-w-3xl">
        <p className="text-gray-700 leading-relaxed text-base mb-6 px-0 lg:px-0">
          <span className="font-bold">IEEE</span> is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities. IEEE, pronounced "Eye-triple-E," stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name. IEEE is the world's la...
        </p>

        {/* Button */}

       <a
  href="https://www.ieee.org"
  target="_blank"
  rel="noopener noreferrer"
  className="relative px-8 py-3 text-gray-900 font-medium rounded-tl-full rounded-tr-full rounded-br-full shadow-md overflow-hidden"
  style={{ backgroundColor: '#5FD4F4' }}
>
  View More
  <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full"></div>
</a>
      </div>
    </div>
  </div>
</section>

{/* IEEE SB Section */}
<section className="py-16 px-8  lg:px-20 p-20 " style={{ backgroundColor: '#C7D9F0' }} >
  <div className="max-w-7xl mx-auto p-2">
    
    <div className="text-center mb-20">
      <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
        IEEE SB NITP
      </h2>
     
      <div className="flex justify-center">
  <svg width="200" height="20" viewBox="0 0 200 20">
    {/* Top Line */}
    <path d="M20 6 Q100 0 180 6" stroke="#3B82F6" strokeWidth="5" fill="none" strokeLinecap="round" />
    {/* Middle Line */}
    <path d="M30 10 Q100 6 170 10" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Bottom Line */}
    <path d="M40 14 Q100 10 160 14" stroke="#93C5FD" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
</div>
    </div>

    
    <div className="flex flex-col items-end">
     

      {/* Paragraph */}
      <div className="max-w-3xl p-5">
        <p className="text-gray-700 leading-relaxed text-base mb-6 px-0 lg:px-0">
          <span className="font-bold">IEEE</span> is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities. IEEE, pronounced "Eye-triple-E," stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name. IEEE is the world's la...
        </p>

        {/* Button */}
         <button
      className="relative px-8 py-3 text-gray-900 font-medium rounded-tl-full rounded-tr-full rounded-br-full shadow-md overflow-hidden cursor-pointer"
      style={{ backgroundColor: '#5FD4F4' }}
      onClick={() => router.push('/')}
    >
      View More
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full"></div>
    </button>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

