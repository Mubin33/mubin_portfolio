import Lottie from "lottie-react";
import about from "../../public/about.json";
import { FaCode } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io"; 

const AboutMe = () => {
  return (
    <div className="bg-transparent lg:px-20 md:px-2 px-3 mt-10 md:mt-0 pb-60">
      {/* <h1 className="text-5xl bg-gradient-to-r pb-3  from-red-950 via-red-600  to-red-950 text-transparent bg-clip-text font-bold text-center ">About Me</h1> */}
      <div className="md:flex justify-between lg:space-x-28 md:space-x-9 items-center">
        <div>
          <div className="relative flex justify-center md:justify-start">
            <Lottie
              className="lg:w-[340px] md:w-[300px] w-[280px]"
              animationData={about}
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl bg-gradient-to-r  from-red-600 via-red-200  to-white text-transparent bg-clip-text font-bold  ">
            Hello, I'm
          </h1>
          <h1 className="text-4xl font-bold  text-white">
            MD. Yasin Arafat Mubin
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            As a passionate Frontend Web Developer skilled in Tailwind,
            JavaScript, React.js and next.js, I aim to design and develop
            intuitive and engaging web applications. I am enthusiastic about
            contributing to innovative projects that deliver real-world impact
            while continually enhancing my technical expertise and professional
            capabilities.
          </p>
          <div className="flex space-x-4 mt-5">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1ra5kXGugbrmnhkpFde4Z0TzYaM-IkJE4/view?usp=sharing"
              className="btn bg-red-600 text-white border-none"
            >
              <FaRegFilePdf size={19} /> See Resume
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1ra5kXGugbrmnhkpFde4Z0TzYaM-IkJE4"
              download
              className="btn btn-outline  text-red-600"
            >
              <IoMdCloudDownload size={19} />
              Download Resume
            </a>
          </div>
          <div className="flex space-x-4">
            <Link
              target="_blank"
              className="text-white mt-5 text-3xl"
              to="https://www.linkedin.com/in/md-yasin-arafat-mubin-33a913237/"
            >
              <FaLinkedin />
            </Link>
            <Link
              target="_blank"
              className="text-white mt-5 text-3xl"
              to="https://github.com/Mubin33"
            >
              <FaGithubSquare />
            </Link>
            <Link
              target="_blank"
              className="text-white mt-5 text-3xl"
              to="https://www.facebook.com/profile.php?id=61566957151512"
            >
              <FaFacebookSquare />{" "}
            </Link>
            <Link
              target="_blank"
              className="text-white mt-5 text-3xl"
              to="https://www.instagram.com/mubin.33/"
            >
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-3 grid-cols-1 mt-1 bg-transparent text-white lg:gap-5   gap-3 ">
        <div className="p-4 rounded-xl  bg-red-900 bg-opacity-20">
          <div className="flex justify-between ">
            <div className="rounded-full items-center mb-3 bg-white bg-opacity-10 p-3">
              <FaCode size={18} />
            </div>
            <h1 className="text-2xl font-semibold">11</h1>
          </div>
          <h1 className="text-sm font-semibold my-1">Project</h1>
          <p className="text-xs text-gray-400">
            MERN Stack 3 and normal project 8
          </p>
        </div>

        <div className="p-4 rounded-xl  bg-red-900 bg-opacity-20">
          <div className="flex justify-between ">
            <div className="rounded-full items-center mb-3 bg-white bg-opacity-10 p-3">
              <PiCertificateDuotone size={18} />
            </div>
            <h1 className="text-2xl font-semibold">7</h1>
          </div>
          <h1 className="text-sm font-semibold my-1">Certificate</h1>
          <p className="text-xs text-gray-400">
            In total Certificate more than 7 
          </p>
        </div>

        <div className="p-4 rounded-xl  bg-red-900 bg-opacity-20">
          <div className="flex justify-between ">
            <div className="rounded-full items-center mb-3 bg-white bg-opacity-10 p-3">
              <TbWorldWww size={18} />
            </div>
            <h1 className="text-2xl font-semibold">/*/</h1>
          </div>
          <h1 className="text-sm font-semibold my-1">Others</h1>
          <p className="text-xs text-gray-400">
            After added, now cann't find out anything
          </p>
        </div>
      </div>
      <Link to="/meinfo">
        <button className="btn mt-4 bg-red-600 w-full text-white border-none">
          See More Information About Me
        </button>
      </Link>
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
