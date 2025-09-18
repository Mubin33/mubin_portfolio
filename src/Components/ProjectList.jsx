import { Link } from "react-router-dom";
import projects from "./Projects";
import { useEffect, useState } from "react";
import card_bg from "../assets/card_bg.jpg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "./ui/moving-border";


const ProjectList = () => {
  return (
    <div className="max-w-8xl mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} projectIndex={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, projectIndex }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 1200); // Set to 2 seconds for better visibility
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  return (
    <CardContainer className="inter-var ">
      <CardBody
      className="cursor-pointer bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-w-[100vw] xl:w-[500px] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link
              to={`/projects/${projectIndex}`}
              
            > 
            <Button borderRadius="1.75rem"  className="inline-block text-base font-medium bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition">
View details
            </Button>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    // <div className="bg-black md:w-[300px] w-[280px]  text-white rounded-lg shadow-lg shadow-red-950 overflow-hidden">
    //   <div className=" h-52  w-full overflow-hidden">
    //     <img
    //       src={project.images[currentImage]}
    //       alt={project.title}
    //       className="w-full h-full  object-cover rounded-lg"
    //     />
    //   </div>
    //   <div
    //     className=""
    //     style={{
    //       backgroundImage: `url(${card_bg})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     <div className="bg-transparent  backdrop-blur-[2px] px-4 pb-4 pt-2 space-y-2 h-full w-full">
    //       <h3 className="text-xl font-semibold">{project.title}</h3>
    //       <p className="text-sm text-gray-300">{project.description}</p>
    //       <Link
    //         to={`/projects/${projectIndex}`}
    //         className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition"
    //       >
    //         View Details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectList;
