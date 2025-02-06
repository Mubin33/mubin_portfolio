
import React, { useState, useEffect } from "react";  
import { Link } from "react-router-dom";
const projects = [
    {
        title: "E-commerce Website", 
        images: "https://i.ibb.co.com/dMc26ZG/Screenshot-61.png", 
        link: "https://ecommerce.example.com",
    },
    {
        title: "E-commerce Website", 
        images: "https://i.ibb.co.com/dMc26ZG/Screenshot-61.png", 
        link: "https://ecommerce.example.com",
    },
    {
        title: "E-commerce Website", 
        images: "https://i.ibb.co.com/dMc26ZG/Screenshot-61.png", 
        link: "https://ecommerce.example.com",
    },
];

const Certificate = () => {
    return ( 
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7    py-12">
            {projects.map((project, index) => (
                <Link to={projects.link} key={index}>
                <div className=" w-[330px]">
                    <img src={project.images} alt="" />
                </div>
                </Link>
            ))}
        </div> 
    );
};
 
 

 

export default Certificate;