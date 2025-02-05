import Lottie from "lottie-react";
import about from "../../public/about.json";
import { FaCode } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";

const AboutMe = () => {
  return (
    <div className="bg-transparent px-20 pb-60">
      {/* <h1 className="text-5xl bg-gradient-to-r pb-3  from-red-950 via-red-600  to-red-950 text-transparent bg-clip-text font-bold text-center ">About Me</h1> */}
      <div className="flex justify-between md:space-x-28 items-center">
      <div>
        <div className="relative"> 
            <Lottie className="w-[340px]" animationData={about} />
          </div>
        </div>
        <div> 
          <h1 className="text-4xl bg-gradient-to-r  from-red-700 via-red-200  to-white text-transparent bg-clip-text font-bold  ">Hello, I'm</h1>
          <h1 className="text-4xl font-bold  text-white">MD. Yasin Arafat Mubin</h1>
          <p className="mt-3 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at
            quam vero sint enim minus adipisci, nesciunt inventore deserunt,
            labore error doloribus, deleniti ad in placeat voluptates rerum
            neque? Impedit!
          </p>
          <div className="flex space-x-4 mt-5">
            <button className="btn bg-red-600 text-white border-none"><FaRegFilePdf size={19}/> See Resume</button>
            <button className="btn btn-outline  text-red-600"><LiaProjectDiagramSolid size={19}/> View Projects</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-3 mt-4 bg-transparent text-white gap-5">
        <div className="p-4 rounded-xl  bg-red-900 bg-opacity-20">
          <div className="flex justify-between ">
            <div className="rounded-full items-center mb-3 bg-white bg-opacity-10 p-3"> 
              <FaCode size={18}/>
              </div> 
            <h1 className="text-2xl font-semibold">11</h1>
          </div>
          <h1 className="text-sm font-semibold my-1">Lorem, ipsum dolor.</h1>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="p-4 rounded-xl  bg-red-900 bg-opacity-20">
          <div className="flex justify-between ">
            <div className="rounded-full items-center mb-3 bg-white bg-opacity-10 p-3"> 
              <PiCertificateDuotone  size={18}/>
              </div> 
            <h1 className="text-2xl font-semibold">11</h1>
          </div>
          <h1 className="text-sm font-semibold my-1">Lorem, ipsum dolor.</h1>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="p-4 rounded-xl  bg-red-900 bg-opacity-20">
          <div className="flex justify-between ">
            <div className="rounded-full items-center mb-3 bg-white bg-opacity-10 p-3"> 
              <TbWorldWww  size={18}/>
              </div> 
            <h1 className="text-2xl font-semibold">11</h1>
          </div>
          <h1 className="text-sm font-semibold my-1">Lorem, ipsum dolor.</h1>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

// <section className="bg-gradient-to-r from-black via-gray-900 to-gray-900 text-white py-12 px-6 md:px-12 lg:px-20">
//             <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
//                 {/* Center Image */}
//                 <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto">
//                     <img
//                         src={aboutme}
//                         alt="About Me"
//                         className="rounded-full shadow-lg border-4 border-blue-500"
//                     />
//                 </div>

//                 {/* Text Section */}
//                 <div className="text-center md:text-left space-y-6">
//                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
//                         About Me
//                     </h2>
//                     <p className="text-sm md:text-base lg:text-lg leading-relaxed">
//                         I’m <span className="font-semibold">MD. Yasin Arafat Mubin</span>, a passionate Frontend Web Developer with a love for crafting beautiful and functional user interfaces. My expertise lies in transforming ideas into visually stunning, interactive websites that provide seamless experiences.
//                     </p>
//                     <p className="text-sm md:text-base lg:text-lg leading-relaxed">
//                         From understanding design principles to implementing cutting-edge web technologies like <span className="text-blue-400 font-semibold">HTML</span>, <span className="text-blue-400 font-semibold">CSS</span>, <span className="text-blue-400 font-semibold">JavaScript</span>, and <span className="text-blue-400 font-semibold">React</span>, I ensure every detail contributes to a cohesive, engaging product.
//                     </p>
//                     <p className="text-sm md:text-base lg:text-lg leading-relaxed">
//                         My development philosophy revolves around responsiveness, user-centered design, and performance optimization. I’m always eager to embrace new challenges, stay updated with the latest trends, and deliver results that exceed expectations.
//                     </p>
//                 </div>
//             </div>
//         </section>
