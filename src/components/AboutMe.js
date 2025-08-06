'use client'; 

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';


const YouTubeIcon = () => <>📺</>;
const FitnessIcon = () => <>🤸</>;

const AboutPage = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,    
  });

  // Animation variants for the container to orchestrate children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger the animation of children
        ease: 'easeInOut',
      },
    },
  };

  // Animation for individual elements sliding up and fading in
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main id='About' className="w-full min-h-screen bg-transparent text-white flex items-center justify-center py-20 px-4">
      <motion.section
        ref={ref} // Attach the ref to the element you want to observe
        className="w-full max-w-3xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'} // Control animation based on inView status
      >
 
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          variants={itemVariants}
        >
          Hey, I&apos;m Abi 👋
        </motion.h1>

   
        <motion.div variants={itemVariants} className="space-y-4 text-lg text-gray-300 leading-relaxed">
          <p>
            I&apos;m a second-year BTech student with a love for building clean, modern web experiences.
          </p>
          <p>
            My journey spans from developing dynamic UIs to exploring the world of data science and content creation.
          </p>
        </motion.div>

        <motion.ul
          className="mt-8 mb-10 text-left space-y-3 text-lg text-gray-300"
          variants={itemVariants}
        >
          <li className="flex items-start gap-3">
            <span className="mt-1"><YouTubeIcon /></span>
            <span>I&apos;m also a YouTube content creator, sharing insights on tech and gaming edits.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1"><FitnessIcon /></span>
            <span>I enjoy calisthenics and technology storytelling to keep mind and body sharp.</span>
          </li>
        </motion.ul>

        <motion.div variants={itemVariants}>
          <Link
            href="/Resume"
            className="inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
          >
            View My Resume
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default AboutPage;

