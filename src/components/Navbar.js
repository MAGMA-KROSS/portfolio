"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";

function Navbar() {
  const [NavSlide, setNavSlide] = useState(false);
  return (
    <div className="sticky top-0 z-25 md:p-12">
      <header className="text-gray-600 hidden md:block body-font bg-gray-50/10 border-1 border-gray-200/40 rounded-full">
        <div className="container mx-auto flex flex-wrap p-5 justify-center md:flex-row items-center">
          <Link href="\" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-white">Kumar Abi</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex text-white flex-wrap items-center text-base justify-center">
            <Link href="\" className="mr-5 hover:text-[#00b8db] transition-all duration-250">Home</Link>
            <Link href="#About" className="mr-5 hover:text-[#00b8db] transition-all duration-250">About</Link>
            <Link href="#Projects" className="mr-5 hover:text-[#00b8db] transition-all duration-250">Project</Link>
            <Link href="#Skills" className="mr-5 hover:text-[#00b8db] transition-all duration-250">Skills</Link>
            <Link href="#Contact" className="mr-5 hover:text-[#00b8db] transition-all duration-250">Contact</Link>
          </nav>

        </div>
      </header>
      <header className="text-gray-600 relative block md:hidden z-25  body-font  ">
        <div className="container mx-auto flex flex-wrap p-5 justify-center flex-col ">
          <div className="flex items-center">
          
            <svg onClick={() => { setNavSlide(!NavSlide) }} className=" scale-110 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>

            <Link href="\" className="flex title-font font-medium items-center text-gray-900  ">

              <span className=" text-2xl text-white">Kumar Abi</span>
            </Link>
          </div>
          <nav className={`md:ml-auto md:mr-auto flex text-white transition-all duration-300  flex-wrap ${NavSlide ? "-translate-x-[0]" : "-translate-x-[200%] h-0"} relative flex-col text-base justify-center`}>
            <Link href="\" className="mr-5 border-1 border-gray-200/40 p-2 pl-5  hover:text-[#00b8db] text-center transition-all duration-250">Home</Link>
            <Link href="#About" className="mr-5 border-1 border-gray-200/40 p-2 pl-5  hover:text-[#00b8db] text-center transition-all duration-250">About</Link>
            <Link href="#Projects" className="mr-5 border-1 border-gray-200/40 p-2 pl-5  hover:text-[#00b8db] text-center transition-all duration-250">Project</Link>
            <Link href="#Skills" className="mr-5 border-1 border-gray-200/40 p-2 pl-5  hover:text-[#00b8db] text-center transition-all duration-250">Skills</Link>
            <Link href="#Contact" className="mr-5 border-1 border-gray-200/40 p-2 pl-5  hover:text-[#00b8db] text-center transition-all duration-250">Contact</Link>
          </nav>

        </div>
      </header>

    </div>
  );
}

export default Navbar;
