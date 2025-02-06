import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const MePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen py-20  flex flex-col items-center justify-center bg-[#180606] text-white "
    >
      <div className="md:px-10 px-3 w-full flex flex-col md:flex-row items-center gap-5">
        {/* Image Section */}
        <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
          <img
            src={profile} // Replace with your image URL
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-red-400">MD. Yasin Arafat Mubin</h1>
          <p className="text-sm mt-4 text-gray-300">
          As a passionate MERN Stack Developer (focused Fronted Development) skilled in Tailwind, JavaScript, React.js and next.js, I aim to design and develop intuitive and engaging web applications. I am enthusiastic about contributing to innovative projects that deliver real-world impact while continually enhancing my technical expertise and professional capabilities.As a passionate Frontend Web Developer skilled in Tailwind, JavaScript, React.js and next.js, I aim to design and develop intuitive and engaging web applications. I am enthusiastic about contributing to innovative projects that deliver real-world impact while continually enhancing my technical expertise and professional capabilities.
            </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p><strong className="text-red-600">Age:</strong> 19</p>
            <p><strong className="text-red-600">Location:</strong>Chottogram, Bangladesh</p>
            <p><strong className="text-red-600">Profession:</strong> MERN Stack Developer</p>
            <p><strong className="text-red-600">Email:</strong> mubinulislam@gmail.com</p>
            <p><strong className="text-red-600">Contact Number:</strong> +8801641278681</p>
            <p><strong className="text-red-600">Whatsapp:</strong> +8801987585355</p>
          </div>
          
          {/* Education Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-red-400">Education</h2>
            <div className="mt-4 text-sm text-gray-300">
              <p><strong className="text-red-600">Degree:</strong> Diploma in Computer Science</p>
              <p><strong className="text-red-600">Institution:</strong>Lakshmipur Polytechnic Institute</p>
              <p><strong className="text-red-600">Year:</strong> 2021 - 2025</p>
            </div>
          </div>
          
          {/* Detailed Introduction Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-red-400">About Me</h2>
            <p className="mt-4 text-sm  text-gray-300">
            My programming journey started with a deep curiosity about how websites and applications work. Over the years, I have honed my skills in frontend development, particularly in React and Tailwind CSS. I enjoy transforming ideas into interactive and engaging user experiences. My focus is on writing clean, maintainable code that enhances both performance and usability.
            </p>
            <p className="mt-4 text-sm  text-gray-300">
              Beyond coding, I have a passion for teaching and sharing knowledge. I have worked as a teacher, helping students grasp complex programming concepts. I also have experience in content writing, where I craft technical articles and scripts.
            </p>
            <p className="mt-4 text-sm  text-gray-300">
              Outside of programming, I enjoy outdoor activities such as scouting, playing football, and engaging in creative hobbies like painting and storytelling. I believe that balancing work with hobbies enhances creativity and productivity.
            </p>
          </div>
           
        </div>
      </div>
    </motion.div>
  );
};

export default MePage;