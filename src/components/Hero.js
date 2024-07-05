// components/HeroSection.js
import React from 'react';
import About from "../components/About.js";
import Team from "../components/Team.js";
import Tech from "../components/Tech.js";
import Achievments from "../components/Achievements.js";
import auvimg from "../../src/assets/auvimg.JPG"

const HeroSection = () => {
  return (<>
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-[#0d1117]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#00b5d8]">
                Autonomous Underwater Vehicle (AUV)
              </h1>
              <p className="max-w-[600px] text-[#c9d1d9] md:text-xl">
                Exploring the depths with our cutting-edge AUV technology.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b5d8] px-8 text-sm font-medium text-[#0d1117] shadow transition-colors hover:bg-[#00a0c4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#30363d] bg-[#0d1117] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#21262d] hover:text-[#c9d1d9] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Join the Team
              </a>
            </div>
          </div>
          <img
            src={auvimg}
            width="700"
            height="550"
            alt="AUV"
            className="mx-auto overflow-hidden rounded-xl sm:w-full h-full lg:order-last hover:shadow-lg transform hover:scale-120 transition-transform duration-300 "
          />
        </div>
      </div>
    </section>
    <About />
    <Team/>
    <Tech/>
    <Achievments/>
    </>
  );
};

export default HeroSection;
