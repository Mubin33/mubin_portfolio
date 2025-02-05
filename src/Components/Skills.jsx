import React from 'react';

// Sample data for technologies
const technologies = [
  { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Tailwind', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'MongoDB', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { name: 'Node.js', img: 'https://webtranslateit.com/assets/docs/file_formats/node_js-5dc52d652505be912bd2f11ab10af482605cbf9bbd5d9ab4178a64490f69f929.png' },
  { name: 'Express', img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png' },
  { name: 'Firebase', img: 'https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s400/image00.png' },
  { name: 'Next.js', img: 'https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png' },
];

const Skills = () => {          
  return (
    <div className="bg-transparent py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 justify-items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-28 bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:scale-105 transition-transform"
          >
            <img src={tech.img} alt={tech.name} className="w-16 h-14 mb-2" />
            <p className="text-lg font-medium text-gray-800">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;



 // <div className="bg-transparent py-10 "> 
    //   <Marquee gradient={false} speed={50}>
    //     {technologies.map((tech, index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col h-full w-28 items-center justify-center mx-2 bg-white shadow-md p-4 rounded-lg border border-gray-200 hover:scale-105 transition-transform"
    //       >
    //         <img src={tech.img} alt={tech.name} className="w-16 h-16 mb-2" />
    //         <p className="text-lg font-medium">{tech.name}</p>
    //       </div>
    //     ))}
    //   </Marquee>
    // </div>