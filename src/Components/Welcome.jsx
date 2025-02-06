import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Welcome = () => {

 

  return (
    <div className="bg-[#1f0000] flex justify-center items-center min-h-screen max-h-screen">
      <div className="">
        <div className="flex space-x-2 justify-center mb-3">
          <button className=" bg-white p-4 text-xl  bg-gradient-to-r from-white via-pink-500 to-red-600   rounded-full">
            <FaCode  />
          </button>
          <button className="  bg-white p-4 text-xl  bg-gradient-to-r from-white via-pink-500 to-red-600   rounded-full">
            <IoPersonCircleSharp />
          </button>
          <button className="  bg-white p-4 text-xl  bg-gradient-to-r from-white via-pink-500 to-red-600   rounded-full">
            <FaGithub />
          </button>
        </div>
        <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-white  to-red-600 text-transparent bg-clip-text">
  Welcome To My<br />
  <span>Portfolio Website</span>
</h1>

<div className="flex justify-center">
        <button className="bg-gradient-to-r from-white  via-pink-500  to-red-600 text-sm px-2 mt-3 rounded-2xl">@www.gitHub.com</button>
</div>
      </div>
    </div>
  );
};

export default Welcome;
