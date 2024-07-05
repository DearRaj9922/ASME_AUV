import React from 'react';
import auvimg from "../assets/auvimg.JPG"

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#5d6e76]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00b5d8]">About the AUV Project</h2>
            <p className="max-w-[900px] text-[#c9d1d9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The ASME IIT Roorkee Autonomous Underwater Vehicle (AUV) project is a student-led initiative that aims
              to design, build, and compete with a state-of-the-art underwater robot. Our goal is to push the
              boundaries of autonomous underwater exploration and showcase the engineering prowess of our team.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src={auvimg}
              width="550"
              height="310"
              alt="AUV Underwater"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#00b5d8]">Autonomous Navigation</h3>
                    <p className="text-[#c9d1d9]">
                      Our AUV is equipped with advanced sensors and algorithms to navigate underwater environments
                      autonomously, without human intervention.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#00b5d8]">Multifunctional Payload</h3>
                    <p className="text-[#c9d1d9]">
                      The AUV can be equipped with a variety of payloads, such as cameras, manipulators, and
                      specialized sensors, to accomplish diverse underwater tasks.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#00b5d8]">Depth Capabilities</h3>
                    <p className="text-[#c9d1d9]">
                      Our AUV is designed to operate at depths of up to 50 meters, allowing it to explore a wide range
                      of underwater environments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
