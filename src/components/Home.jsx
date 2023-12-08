import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="pb-8">
        <div className="text-left mx-auto">
          <p className="text-[#0abab5] text-lg">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Zarima Moon
          </h1>
          <p className="text-[#8892b0] max-w-[700px]">
            an enthusiastic{" "}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8892b0]">
            Software Engineer,
          </h2>
          <p className="text-[#8892b0] max-w-[700px]">
            at the beginning of my career. My passion for coding is driven by a
            relentless thirst for knowledge, a dedication to self-improvement,
            and a love for tackling challenges in the coding realm.
          </p>
          <p className="text-[#8892b0] max-w-[700px]">
            Learning is my core drive. After exploring various spoken languages,
            I've now directed my curiosity toward coding languages.
          </p>
          <p className="text-[#8892b0] max-w-[700px]">
            Explore my projects and join me on this exciting coding adventure!
          </p>
        </div>
        <div>
          <Link to="projects" smooth={true} duration={600}>
            <button className="text-white rounded-lg group border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-[#0abab5] hover:border-[#0abab5]">
              View Projects
              <span className="group-hover:rotate-90 duration-400">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
