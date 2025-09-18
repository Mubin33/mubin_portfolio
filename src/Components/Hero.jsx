import React from 'react';
import banner from '../assets/banner.jpg';
import img from '../assets/img.jpg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',   
            }}
            className="md:flex items-center h-[820px] md:h-[600px] justify-center text-white"
        >
            <div className="pl-5 md:pl-10 lg:pl-16 pt-20 md:pt-0 md:pr-3 pr-5  lg:pr-10 flex-1">
                <h1 className="text-5xl font-bold">
                    I'm Mubin,
                    <br />
                    As a Frontend Developer
                </h1> 
                <p className="mt-4 text-xs text-gray-300">
                    My interest in web development started with a curiosity about how websites function and a passion for transforming creative ideas into interactive digital experiences.
                </p>
                <div className="mt-6 flex   gap-3">
                    <FaFacebookSquare size={25} />
                    <FaLinkedin size={25} />
                    <FaInstagramSquare size={25} />
                    <FaGithubSquare size={25} />
                </div>
                <button className="btn bg-orange-500 mt-4 btn-outline  ">Resume</button>
            </div>
            <div className='flex-1 pt-10 md:pt-0 flex justify-center items-center'>
                <img className='h-[300px] rounded-2xl w-[320px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Hero;
