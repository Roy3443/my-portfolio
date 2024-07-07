import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import ProfPic from "../assets/ProfPic.jpg";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 min-h-screen pt-5">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-20 md:flex-row">
        <div className="flex flex-col justify-center px-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Roy Joshua Lasrado
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Aspiring software developer
          </p>
          <div className="flex space-x-4 py-4">
            <a href="https://github.com/Roy3443" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/roylasrado" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <FaLinkedin size={30} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <FaTwitter size={30} />
            </a>
          </div>
          <div>
            <Link
              to="resume"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700 cursor-pointer"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-auto">
          <img
            src={ProfPic}
            alt="my profile"
            className="rounded-2xl w-40 h-40 md:w-48 md:h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
