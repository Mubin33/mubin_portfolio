import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import full_bg from "./assets/full-bg.jpg";
import Welcome from "./Components/Welcome";
import Showcase from "./Components/Showcase";
import NewHero from "./Components/NewHero";
import ContactMe from "./Components/ContactMe";

const Home = () => {
  const [time, setTime] = useState(true);

  // Hide the Welcome component after 3 seconds
  setTimeout(() => {
    setTime(false);
  }, 1100);

  return (
    <>
      {time ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.94 }}
          transition={{ duration: 2 }}
        >
          <Welcome />
        </motion.div>
      ) : (
        <motion.div
          id="parents"
          className="relative min-h-screen w-full  bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${full_bg})` }}
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
        >
          <div className="backdrop-blur-[11px]   ">
          <motion.div
            id="children"
            className="bg-transparent   container mx-auto  pb-20 h-full w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div>
              <Navbar />
            </div>
            {/* <Hero /> */}
            <div>
              <NewHero/>
            </div> 
            <div>
              <AboutMe/>
            </div>
            <div className="bg-transparent "> 
            <Showcase/>
            </div>

<div><ContactMe/></div>
            <div>
          </div>
          </motion.div>
          </div>

          
        </motion.div>
      )}
    </>
  );
};

export default Home;
