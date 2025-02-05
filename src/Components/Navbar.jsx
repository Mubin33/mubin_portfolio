const Navbar = () => {
  return (
    <div className="fixed top-0  w-full container mx-auto z-50 bg-black backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 py-3  ">
        {/* Logo */}
        <a className="text-orange-500 text-2xl font-bold">
          MUB<span className="text-blue-500">in</span>
        </a>

        {/* Resume Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
