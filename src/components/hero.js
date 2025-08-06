'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';


const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">

      <div className="relative z-10 flex flex-col items-center p-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4">
          Kumar Abi
        </h1>

        <div className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-2 min-h-[56px] md:min-h-[64px] flex items-center justify-center">
          <Typewriter
            options={{
              strings: [
                "Building Interfaces. Creating Impact.",
                "Turning Ideas into Reality.",
                "Crafting Clean and Modern Web Apps.",
                "Exploring the World of Data Science.",
                "Blending Creativity with Technology."
              ],
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 50,
            }}
          />
        </div>
        
        <p className="text-md md:text-lg text-cyan-400 font-medium tracking-wide mb-8">
          Web Developer | Data Science Enthusiast | Content Creator
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

