'use client'; 

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 20 20"><path fill="currentColor" d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25Z"/></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;


const contactOptions = [
  { name: "Email", icon: <MailIcon />, link: "mailto:abik4001@gmail.com" },
  { name: "GitHub", icon: <GithubIcon />, link: "https://github.com/MAGMA-KROSS" },
  { name: "LinkedIn", icon: <LinkedInIcon />, link: "https://linkedin.com/in/abiikx" },
  { name: "Instagram", icon: <InstagramIcon />, link: "https://instagram.com/abiikx" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeInOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


const ContactPage = () => {
  const { ref: optionsRef, inView: optionsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const formData = new FormData(e.target);

    try {
    
      const response = await fetch(process.env.NEXT_PUBLIC_FORMLINK, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus(data.errors.map(error => error.message).join(', '));
        } else {
          setStatus('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };


  return (
    <main id='Contact' className="w-full min-h-screen bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let’s Connect
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project idea, opportunity, or just want to say hi? I’d love to hear from you!
          </motion.p>
        </motion.div>

        <motion.div
          ref={optionsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={optionsInView ? 'visible' : 'hidden'}
        >
          {contactOptions.map((option) => (
            <motion.a
              key={option.name}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center gap-3 text-center shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 text-cyan-400">{option.icon}</div>
              <span className="font-semibold">{option.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? 'visible' : 'hidden'}
          variants={itemVariants}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" name="name" id="name" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" name="email" id="email" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea name="message" id="message" rows="5" required className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
            {status && <p className="text-center text-sm mt-4">{status}</p>}
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;

