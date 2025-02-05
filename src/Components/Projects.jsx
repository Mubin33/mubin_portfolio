import React, { useState, useEffect } from "react";
import card_bg from "../assets/card_bg.jpg";
// Example project data
const projects = [
    {
        title: "E-commerce Website",
        description: "A fully responsive e-commerce platform built with React, Tailwind CSS, and MongoDB.",
        images: [
            "https://i.ibb.co.com/dMc26ZG/Screenshot-61.png",
            "https://i.ibb.co.com/bH4JvGB/Screenshot-62.png",
            "https://i.ibb.co.com/jrgYLsG/Screenshot-63.png",
            "https://i.ibb.co.com/JqY4v3z/Screenshot-64.png",
            "https://i.ibb.co.com/7g0Hjtd/Screenshot-65.png",
            "https://i.ibb.co.com/z20CTNN/Screenshot-66.png",
        ],
        link: "https://ecommerce.example.com",
    },
    {
        title: "Portfolio Website",
        description: "A sleek and modern personal portfolio showcasing skills and projects.",
        images: [
            "https://i.ibb.co.com/gty6w2N/Screenshot-67.png",
            "https://i.ibb.co.com/jzszqB4/Screenshot-68.png",
            "https://i.ibb.co.com/pzNcQDT/Screenshot-69.png",
            "https://i.ibb.co.com/DgGP8Yd/Screenshot-70.png",
            "https://i.ibb.co.com/cx47XkZ/Screenshot-71.png",
            "https://i.ibb.co.com/tXVnRVL/Screenshot-72.png",
        ],
        link: "https://portfolio.example.com",
    },
    {
        title: "Blog Platform",
        description: "A blog platform with user authentication, post creation, and comment features.",
        images: [
            "https://i.ibb.co.com/1G71TGR/Screenshot-73.png",
            "https://i.ibb.co.com/qngZrcF/Screenshot-74.png",
            "https://i.ibb.co.com/wwV52b9/Screenshot-75.png",
            "https://i.ibb.co.com/Kx8pz2g/Screenshot-76.png",
            "https://i.ibb.co.com/Kzw4ZjB/Screenshot-78.png",
            "https://i.ibb.co.com/266X3WC/Screenshot-79.png",
        ],
        link: "https://blog.example.com",
    },
    {
        title: "Blog Platform",
        description: "A blog platform with user authentication, post creation, and comment features.",
        images: [
            "/project3/img1.jpg",
            "/project3/img2.jpg",
            "/project3/img3.jpg",
            "/project3/img4.jpg",
            "/project3/img5.jpg",
        ],
        link: "https://blog.example.com",
    },
    {
        title: "Blog Platform",
        description: "A blog platform with user authentication, post creation, and comment features.",
        images: [
            "/project3/img1.jpg",
            "/project3/img2.jpg",
            "/project3/img3.jpg",
            "/project3/img4.jpg",
            "/project3/img5.jpg",
        ],
        link: "https://blog.example.com",
    },
];

const Projects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7   py-12">
            {projects.map((project, index) => (
                <SingleCard key={index} project={project} />
            ))}
        </div>
    );
};

const SingleCard = ({ project }) => {
    const [currentImage, setCurrentImage] = useState(0);

    // Automatically change the image every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                (prevImage + 1) % project.images.length
            );
        }, 1000);
        return () => clearInterval(interval);
    }, [project.images.length]);

    return (
        <div className="bg-black w-[320px]  text-white rounded-lg shadow-lg shadow-red-950 overflow-hidden">
            {/* Image Slider */}
            <div className="h-52 w-full overflow-hidden">
                <img
                    src={project.images[currentImage]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Content */}
            <div 
            style={{
            backgroundImage: `url(${card_bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',   
                    }}
                    // className="bg-[#1f0000]"
            
            >
                <div className="bg-transparent  backdrop-blur-[2px] px-4 pb-4 pt-2 space-y-2 h-full w-full">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition"
                    >
                    Visit Now
                </a>
                    </div>
            </div>
        </div>
    );
};
 


export default Projects;