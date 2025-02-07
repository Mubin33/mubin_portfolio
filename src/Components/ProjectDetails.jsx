import { Link, useParams } from "react-router-dom";
import projects from "./Projects";
import full_bg from "../assets/full-bg.jpg";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];
  console.log(project);

  if (!project) {
    return <p className="text-center text-red-500">Project not found!</p>;
  }

  return (
    <div
      className="relative min-h-screen w-full  bg-cover bg-fixed bg-center"
      id="parents"
      style={{ backgroundImage: `url(${full_bg})` }}
    >
      <div
  className=" lg:px-20 md:px-16 px-1 mx-auto p-6 bg-transparent backdrop-blur-sm container pb-20 h-full w-full"
  id="children"
>
        <h2 className="text-4xl pt-20 font-bold text-white">{project.title}</h2>
        <p className="text-white mt-4">{project.description}</p>
        <pre className=" bg-red-900 bg-opacity-30 text-white lg:p-4 p-1 rounded-lg mt-4 lg:text-sm md:text-[13px] text-[10px]">
          {project.details}
        </pre>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {project.images.map((img, idx) => (
            <div key={idx} className="lg:px-0 md:px-28 px-20">
            <img
              src={img}
              alt={`Project Screenshot ${idx}`}
              className="rounded-lg  "
              />
              </div>
          ))}
        </div>
        <Link
          to={project.live_link}
          target="_blank" 
          className="btn bg-red-600 text-white border-none m-3 hover:bg-sky-600 transition"
        >
          Visit Project
        </Link>
        <Link
          to={project.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline  text-red-600 m-3 hover:bg-sky-600 transition"
        >
          Visit Github
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
