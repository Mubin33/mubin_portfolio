import React, { useState } from "react";
import Certificate from "./Certificate";
import Skills from "./Skills";
import ProjectList from "./ProjectList";

const Showcase = () => {
  const [activeItem, setActiveItem] = useState("project");

  return (
    <div className="lg:px-24  bg-transparent lg:pt-10 md:pt-5 pt-0">
      <div>
        <h1 className="text-3xl text-center font-bold bg-gradient-to-t from-white  via-red-700  to-red-950 text-transparent bg-clip-text">
          Portfolio Showcase
        </h1>
        <p className="text-xs text-center text-gray-400 my-2">
          Explore my projects, where creativity meets functionality! From
          full-stack web applications to dynamic user interfaces, each project
          showcases my expertise in the MERN stack and Next.js. With a focus on
          performance, security, and seamless user experience, I build scalable
          solutions tailored for modern web development. Dive in to see
          innovation in action!
        </p>
        <div className="grid cursor-pointer grid-cols-3 p-2  bg-red-900 bg-opacity-20  ">
          <div
            onClick={() => setActiveItem("project")}
            className={`flex justify-center py-3 bg-black bg-opacity-3  font-bold text-white bg-transparent ${
              activeItem === "project"
                ? "  bg-gradient-to-r from-black via-[#1f0000]   to-red-600"
                : ""
            }`}
          >
            <h1>Projects</h1>
          </div>
          <div
            onClick={() => setActiveItem("certificate")}
            className={`flex justify-center py-3 bg-black bg-opacity-3  font-bold text-white bg-transparent ${
              activeItem === "certificate"
                ? "  bg-gradient-to-r from-black via-[#1f0000]   to-red-600"
                : ""
            }`}
          >
            <h1>Certificate</h1>
          </div>
          <div
            onClick={() => setActiveItem("skills")}
            className={`flex justify-center py-3 bg-black bg-opacity-3  font-bold text-white bg-transparent ${
              activeItem === "skills"
                ? "  bg-gradient-to-r from-black via-[#1f0000]   to-red-600"
                : ""
            }`}
          >
            <h1>Skills</h1>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        {activeItem === "project" && <ProjectList />}
        {activeItem === "certificate" && <Certificate />}
        {activeItem === "skills" && <Skills />}
      </div>
    </div>
  );
};

export default Showcase;
