import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#140808] container mx-auto text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
