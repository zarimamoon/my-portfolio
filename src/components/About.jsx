import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full justify-center items-center mx-auto px-8 flex flex-col h-full bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] flex flex-col w-full h-full">
        <div className=" w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-[#8892b0] font-bold inline border-b-4 border-[#0abab5]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="text-[#8892b0] w-full px-8 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi! I'm Zarima, and it's a pleasure to welcome you to my
              portfolio.
            </p>
          </div>
          <div>
            <p>
              Imagine having a proactive and results-driven Software Engineer on
              your team—a dynamic force fueled by a relentless drive to learn,
              innovate, and tackle challenges head-on. I bring a deep passion
              for creating excellent software, coupled with a commitment to
              continuous self-improvement.
            </p>

            <p>
              My expertise spans mastering technical intricacies and seamlessly
              bridging the gap between development and operations through DevOps
              Essentials. Proficient in HTML, CSS, Tailwind CSS, React.js,
              PostgreSQL, Node.js, and Express, I am armed with a versatile
              toolkit for solving complex tech challenges.
            </p>

            <p>
              But it doesn't end there. I've delved into DevOps Essentials,
              striving to unify development and operations seamlessly. My
              proudest achievement is earning the Cloud Practitioner
              Certification from Amazon Web Services—a testament to my
              dedication to tech excellence. I'm on a constant journey to expand
              my expertise, ready to bring innovation and success to your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
