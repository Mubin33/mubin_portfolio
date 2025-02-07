import React from "react";
import Lottie from "lottie-react";
import developerAnimation from "../../public/hero.json";

const NewHero = () => {
  return (
    <div className="min-h-screen flex items-center  bg-transparent text-white">
      <main className="flex flex-col-reverse lg:space-x-16 md:space-x-8 md:flex-row items-center justify-between md:px-4 px-3 lg:px-20 lg:py-52 md:py-32 py-16">
        <div className="lg:w-1/2 md:w-2/3  w-full text-center md:text-left ">
          <div className="inline-block shadow-lg text-xs shadow-red-900  bg-transparent text-white px-2 py-1  rounded-full mb-4">
            Ready to innovate
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Web <br />
            <span className="bg-gradient-to-r  from-white via-red-600  to-red-950 text-transparent bg-clip-text">
              Developer
            </span>
          </h2>
          <span className=" pr-2 text-xl border-r-2 border-red-600">
            MERN Stack And NEXT.js DEVELOPER
          </span>
          <p className="text-gray-300 mt-2 text-xs mb-5">
            I specialize in building scalable, high-performance web applications
            using the MERN stack and Next.js. With expertise in React.js for
            dynamic UI, Node.js & Express.js for backend logic, and MongoDB for
            efficient data management, I develop full-stack solutions with
            seamless user experiences. Leveraging Next.js for SSR, SSG, and API
            routes, I ensure optimized performance, security, and SEO-friendly
            applications. Passionate about clean code, authentication systems,
            and role-based access control, I create modern web platforms
            tailored for efficiency and growth. 🚀
          </p>

          <div className="flex flex-wrap md:justify-start justify-center gap-4">
            <button className="bg-gradient-to-r opacity-60 px-2  btn btn-xs border-none from-red-900  to-red-950 text-xs hover:bg-red-600 text-white  rounded-full">
              React
            </button>
            <button className="bg-gradient-to-r opacity-60 px-2  btn btn-xs border-none from-red-900  to-red-950 text-xs hover:bg-red-600 text-white  rounded-full">
              JavaScript
            </button>
            <button className="bg-gradient-to-r opacity-60 px-2  btn btn-xs border-none from-red-900  to-red-950 text-xs hover:bg-red-600 text-white  rounded-full">
              MongoDB
            </button>
            <button className="bg-gradient-to-r opacity-60 px-2  btn btn-xs border-none from-red-900  to-red-950 text-xs hover:bg-red-600 text-white  rounded-full">
              Next.js
            </button>
            <button className="bg-gradient-to-r opacity-60 px-2  btn btn-xs border-none from-red-900  to-red-950 text-xs hover:bg-red-600 text-white  rounded-full">
              Tailwind
            </button> 
          </div>
        </div>

        <div className="lg:w-1/2  flex  justify-end mb-10 lg:mb-0">
          <div className="relative">
            <Lottie
              className="lg:w-[440px] md:w-[300px] w-[300px]"
              animationData={developerAnimation}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewHero;
