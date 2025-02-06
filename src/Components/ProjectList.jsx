import { Link } from "react-router-dom";
import projects from "./Projects";
import { useEffect, useState } from "react";
import card_bg from "../assets/card_bg.jpg";

const ProjectList = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
    <div className="bg-black w-[300px]  text-white rounded-lg shadow-lg shadow-red-950 overflow-hidden">
      <div className=" h-52  w-full overflow-hidden">
        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="w-full h-full  object-cover rounded-lg"
        />
        </div>
        <div className=""
        style={{
                      backgroundImage: `url(${card_bg})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',   
                              }}
        >
          <div className="bg-transparent  backdrop-blur-[2px] px-4 pb-4 pt-2 space-y-2 h-full w-full">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
          <Link
            to={`/projects/${projectIndex}`}
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition"
          >
            View Details
          </Link>
          </div>
        </div> 
    </div>
  );
};

export default ProjectList;
