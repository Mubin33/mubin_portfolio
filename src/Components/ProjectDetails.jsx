import { useParams } from "react-router-dom";
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
  className=" px-20 mx-auto p-6 bg-transparent backdrop-blur-sm container pb-20 h-full w-full"
  id="children"
>
        <h2 className="text-4xl pt-20 font-bold text-white">{project.title}</h2>
        <p className="text-white mt-4">{project.description}</p>
        <pre className=" bg-red-900 bg-opacity-30 text-white p-4 rounded-lg mt-4 text-sm">
          {project.details}
        </pre>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Project Screenshot ${idx}`}
              className="rounded-lg"
            />
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
