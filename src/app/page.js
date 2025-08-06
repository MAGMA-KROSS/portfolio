'use client';
import ProjectsPage from "@/components/Projects";
import Hero from "../components/hero"
import AboutMe from "@/components/AboutMe";
import ToolBox from "../components/SkillsPage"
import ContactPage from "@/components/ContactPage";

export default function Home() {
  return (
    <>

      <Hero/>
      <AboutMe/>
      <ProjectsPage/>
      <ToolBox/>
      <ContactPage/>
    </>
  );
}
