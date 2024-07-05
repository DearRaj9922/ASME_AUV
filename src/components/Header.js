// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#0d1117] text-white">
      <a className="flex items-center justify-center" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 fill-[#00b5d8]"
        >
          <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path>
          <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
          <path d="M12 10v4"></path>
          <path d="M12 2v3"></path>
        </svg>
        <span className="sr-only">ASME IIT Roorkee AUV</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4 text-[#00b5d8]" href="#">
          About
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4 text-[#00b5d8]" href="#">
          Team
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4 text-[#00b5d8]" href="#">
          Tech
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4 text-[#00b5d8]" href="#">
          Achievements
        </a>
      </nav>
    </header>
  );
};

export default Header;
