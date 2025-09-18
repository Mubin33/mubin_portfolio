import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  w-full"> 
    <div className="fixed top-0 w-full container mx-auto z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-red-600 text-3xl font-bold">
          MUB<span className="text-sky-500">in</span>
        </Link>

        {/* Resume Download Button */}
        <Link
          target="_blank"
          to="https://drive.google.com/file/d/1dWHyCO51PSSy1hl9afJ33uOm2d25yGk-/view?usp=sharing"
          className="btn bg-red-600 text-white border-none"
          >
          {" "}
          See Resume
        </Link>
      </div>
    </div>
          </div>
  );
};

export default Navbar;
