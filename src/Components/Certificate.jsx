
import { Link } from "react-router-dom";
const projects = [
    {
        title: "MS word",
        images: "https://i.ibb.co.com/Z1R4FM5W/Screenshot-97.png",
        link: "https://drive.google.com/file/d/1kdyN0qahWSZysa-3OZw7QvCQUs5v27RC/view?usp=sharing",
    },
    {
        title: "Email",
        images: "https://i.ibb.co.com/XfYcYV8S/Screenshot-98.png",
        link: "https://drive.google.com/file/d/1gVR4L_lHnZmWG9Aiw2zOdTqYCfuDsNL5/view?usp=sharing",
    },
    {
        title: "ph",
        images: "https://i.ibb.co.com/sJCz3hvx/Screenshot-135.png",
        link: "https://drive.google.com/file/d/1sRkQO3yqKP7q-2_StvPXeg73g3RI7h1B/view?usp=sharing",
    },
];

const Certificate = () => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7    py-12">
            {projects.map((project, index) => (
                <Link target="_blank" to={project.link} key={index}>
                <div className="flex items-center justify-center  h-full px-2 w-full xl:w-[330px]">
                    <img src={project.images} alt="" />
                </div>
                </Link>
            ))}
        </div>
    );
};





export default Certificate;