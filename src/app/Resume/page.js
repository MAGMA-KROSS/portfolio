// app/resume/page.tsx
'use client'; // This directive is necessary for using hooks

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// --- Reusable Section Component for Animation ---
const Section = ({ title, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-500 pb-2 inline-block">
        {title}
      </h2>
      <div className="text-gray-300 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
};

// --- Data for Skills and Projects ---
const skills = {
  Languages: ["JavaScript", "Python", "HTML5", "CSS3", "C", "SQL"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "NextAuth.js", "Razorpay API"],
};

const projects = [
    {
        name: "Buy Me a Chai (Full-Stack Donation Platform)",
        tech: "Next.js, Tailwind CSS, MongoDB, NextAuth.js, Razorpay API",
        description: [
            "Developed a chai-themed donation platform with secure payments via Razorpay API.",
            "Implemented user authentication and real-time transaction management.",
        ],
    },
    {
        name: "Magma-Hacks Homepage (Modern Landing Page)",
        tech: "Next.js, shadcn/ui, Tailwind CSS",
        description: [
            "Designed a responsive hackathon landing page using reusable shadcn/ui components.",
        ],
    },
    {
        name: "Magma Drive (Cloud Storage App)",
        tech: "Node.js, Express.js, Supabase, HTML, CSS, JavaScript",
        description: [
            "Built a Google Drive-style storage app with file upload, authentication, and Supabase backend.",
        ],
    },
    {
        name: "X (Twitter) Clone",
        tech: "HTML, Tailwind CSS, JavaScript",
        description: [
            "Created a responsive clone of Twitter's interface using Tailwind CSS.",
        ],
    },
    {
        name: "Spotify Clone",
        tech: "HTML, CSS, JavaScript",
        description: [
            "Developed a functional Spotify clone with DOM-based music player controls.",
        ],
    },
];


// --- Main Resume Page Component ---
const ResumePage = () => {
  return (
    <main className="w-full min-h-screen bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            My Journey So Far
          </h1>
          <Link
            href="/Kumar_Abi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </Link>
        </motion.div>

        {/* Professional Summary */}
        <Section title="Professional Summary">
          <p>
            Motivated and detail-oriented Computer Science student with a strong foundation in modern web development. Proficient in building responsive, full-stack applications using React.js, Next.js, and the MERN stack. Eager to leverage hands-on project experience to secure a challenging Web Developer Internship or Intern role where I can contribute to innovative web solutions and grow my skills.
          </p>
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-600 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.name}>
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div>
            <h3 className="text-xl font-bold text-white">B.Tech in Computer Science & Engineering (Data Science)</h3>
            <p className="text-gray-400">JSS Academy of Technical Education, Noida</p>
            <p className="text-sm text-cyan-400">Expected Graduation: 2028</p>
          </div>
        </Section>
      </div>
    </main>
  );
};

export default ResumePage;

