import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full container mx-auto z-50 bg-black backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-red-600 text-3xl font-bold">
          MUB<span className="text-sky-500">in</span>
        </Link>

        {/* Resume Download Button */}
        <Link target="_blank" to="https://drive.google.com/file/d/1ra5kXGugbrmnhkpFde4Z0TzYaM-IkJE4/view?usp=sharing" className="btn bg-red-600 text-white border-none">  See Resume</Link>
      </div>
    </div>
  );
};

export default Navbar;

