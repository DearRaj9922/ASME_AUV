import React from 'react';
import techimg from "../assets/tech.jpg"

const TechSection = () => {
  return (
    <section id="tech" className="w-full py-12 md:py-24 lg:py-32 bg-[#5d6e76]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00b5d8]">Technology Stack</h2>
            <p className="max-w-[900px] text-[#c9d1d9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our Autonomous Underwater Vehicle (AUV) utilizes cutting-edge technologies to achieve autonomous
              navigation, data acquisition, and underwater exploration.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00b5d8]">Propulsion System</h3>
                      <p className="text-[#c9d1d9]">
                        Our AUV is equipped with a powerful thruster system that allows for precise maneuvering and
                        high-speed transportation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00b5d8]">Sensor Suite</h3>
                      <p className="text-[#c9d1d9]">
                        The AUV is outfitted with a comprehensive suite of sensors, including sonar, cameras, and
                        inertial measurement units, to enable advanced perception and navigation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00b5d8]">Onboard Computing</h3>
                      <p className="text-[#c9d1d9]">
                        A powerful onboard computer running custom software algorithms handles the AUV's autonomous
                        decision-making and control.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src={techimg}
                width="550"
                height="310"
                alt="AUV Technical"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
