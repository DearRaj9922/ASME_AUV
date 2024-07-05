import React from 'react';
import profile from "../assets/placeholder.svg"

const TeamSection = () => {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-[#0d1117]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00b5d8]">Meet the Team</h2>
            <p className="max-w-[900px] text-[#c9d1d9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our dedicated team of students from various engineering disciplines come together to design, build,
              and compete with our Autonomous Underwater Vehicle.
            </p>
          </div>
          <div className="grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {/* Team member cards */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profile}
                width="250"
                height="250"
                alt="Team Member"
                className="rounded-full w-36 h-36 object-cover object-center"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold text-[#00b5d8]">John Doe</h3>
                <p className="text-[#c9d1d9]">Role: Team Lead</p>
                <p className="text-[#c9d1d9]">Department: Mechanical Engineering</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profile}
                width="250"
                height="250"
                alt="Team Member"
                className="rounded-full w-36 h-36 object-cover object-center"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold text-[#00b5d8]">John Doe</h3>
                <p className="text-[#c9d1d9]">Role: Team Lead</p>
                <p className="text-[#c9d1d9]">Department: Mechanical Engineering</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profile}
                width="250"
                height="250"
                alt="Team Member"
                className="rounded-full w-36 h-36 object-cover object-center"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold text-[#00b5d8]">John Doe</h3>
                <p className="text-[#c9d1d9]">Role: Team Lead</p>
                <p className="text-[#c9d1d9]">Department: Mechanical Engineering</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profile}
                width="250"
                height="250"
                alt="Team Member"
                className="rounded-full w-36 h-36 object-cover object-center"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold text-[#00b5d8]">John Doe</h3>
                <p className="text-[#c9d1d9]">Role: Team Lead</p>
                <p className="text-[#c9d1d9]">Department: Mechanical Engineering</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profile}
                width="250"
                height="250"
                alt="Team Member"
                className="rounded-full w-36 h-36 object-cover object-center"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold text-[#00b5d8]">John Doe</h3>
                <p className="text-[#c9d1d9]">Role: Team Lead</p>
                <p className="text-[#c9d1d9]">Department: Mechanical Engineering</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profile}
                width="250"
                height="250"
                alt="Team Member"
                className="rounded-full w-36 h-36 object-cover object-center"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-bold text-[#00b5d8]">John Doe</h3>
                <p className="text-[#c9d1d9]">Role: Team Lead</p>
                <p className="text-[#c9d1d9]">Department: Mechanical Engineering</p>
              </div>
            </div>
            {/* Repeat for each team member */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
