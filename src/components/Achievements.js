import React from 'react';
import achievimg from "../assets/achievimg.jpg"

const AchievementsSection = () => {
  return (
<section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-[#0d1117]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00b5d8]">
                  Achievements and Competitions
                </h2>
                <p className="max-w-[900px] text-[#c9d1d9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Autonomous Underwater Vehicle has consistently performed well in national and international
                  competitions, showcasing our team's engineering expertise and the capabilities of our cutting-edge
                  design.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src={achievimg}
                width="550"
                height="310"
                alt="AUV Competition"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00b5d8]">1st Place, AUVSI SUBTECH Competition</h3>
                      <p className="text-[#c9d1d9]">
                        Our AUV took home the top prize at the prestigious AUVSI SUBTECH competition, showcasing our
                        team's engineering prowess on the global stage.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00b5d8]">2nd Place, NIOT AUV Challenge</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  );
};

export default AchievementsSection;
