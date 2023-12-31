import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactIcon from '../assets/react.png';
import Node from '../assets/node.png'
import Bootstrap from '../assets/bootstrap.webp';
import Tailwind from '../assets/tailwind.png';
import AWS from '../assets/aws.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-[#8892b0]">
        {/* Container */}
        <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-[#0abab5]">Skills</p>
                <p className="py-4">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ReactIcon} alt="React icon" />
                <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Node} alt="Node icon" />
                <p className="my-4">NODE JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Bootstrap} alt="Bootstrap icon" />
                <p className="my-4">BOOTSTRAP</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
                <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={AWS} alt="AWS icon" />
                <p className="my-4">AWS</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Skills;