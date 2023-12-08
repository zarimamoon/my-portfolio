import React from "react";
import MyFavShop from "../assets/my-favshop.png";
import Countries from "../assets/Countries.png"

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-[#8892b0] bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#0abab5]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${MyFavShop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://myfav-shop.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/zarimamoon/e-commerce-site-project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Countries})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://around-the-world-zarimamoon.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/zarimamoon/Always-Be-Coding-Countries">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;