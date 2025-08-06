
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


const projects = [
  {
    name: "AI Resume Generator",
    description: "Generates smart, ATS-friendly resumes using AI prompts.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
    highlight: "Saves hours of manual editing and enhances resumes in seconds.",
    githubUrl: "#", // Replace with your GitHub URL
    liveUrl: "#",   // Replace with your Live Demo URL
    imageUrl: "https://placehold.co/600x400/0f172a/c0ffee?text=AI+Resume+Generator",
  },
  {
    name: "AI Fitness Coach",
    description: "Offers fitness routines and health suggestions based on user input.",
    tech: ["React", "GPT-4 API", "Tailwind"],
    highlight: "Personal trainer experience without a subscription.",
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/600x400/0f172a/c0ffee?text=AI+Fitness+Coach",
  },
  {
    name: "AI Astrologer",
    description: "Gives personality insights based on birth details using astrology + AI.",
    tech: ["Node.js", "Express", "GPT", "HTML/CSS"],
    highlight: "A fun and unique blend of ancient tradition and modern technology.",
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/600x400/0f172a/c0ffee?text=AI+Astrologer",
  },
  {
    name: "Netflix Homepage Clone",
    description: "A UI clone of the Netflix homepage created to practice advanced CSS.",
    tech: ["HTML", "CSS"],
    highlight: "Solidified core CSS and responsive layout skills through practice and This was my first project, completed on the 7th day of my web development journey, and I’m really proud of it.",
    githubUrl: "https://github.com/MAGMA-KROSS/Web-Development/tree/main/Netflix%20clone",
    liveUrl: "http://web-development-ausj.vercel.app/",
    imageUrl: "/netflix.png",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: 'easeInOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ProjectCard = ({ project }) => {
  const [imgSrc, setImgSrc] = useState(project.imageUrl);

  return (
    <motion.article
      variants={cardVariants}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 flex flex-col h-full transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={`Screenshot of ${project.name}`}
          width={600}
          height={400}
          unoptimized // ✅ skips Next.js optimization (fixes SVG error)
          className="w-full h-full object-cover"
          onError={() =>
            setImgSrc(
              "https://placehold.co/600x400/ef4444/ffffff?text=Image+Failed"
            )
          }
        />

      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>

          <h4 className="text-sm font-semibold text-white mb-2">Why it's cool:</h4>
          <p className="text-cyan-400 text-sm mb-4">{project.highlight}</p>

          <h4 className="text-sm font-semibold text-white mb-3">Tech Used:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900/60 mt-auto p-4 flex justify-end gap-4">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
        >
          GitHub
        </Link>
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-500 transition-colors"
        >
          Live Demo
        </Link>
      </div>
    </motion.article>
  );
};



const ProjectsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main id='Projects' className="w-full min-h-screen bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16"
        >
          Projects I&apos;m Proud Of
        </motion.h1>


        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectsPage;

