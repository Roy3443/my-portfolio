import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import ProfPic from "../assets/profile.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="py-40 w-full  bg-black"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 items-start">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Roy Lasrado
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-2xl">
            Aspiring software developer
          </p>
          <div className="flex space-x-4 py-4">
            <a
              href="https://github.com/Roy3443"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/roylasrado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/roy_lasrado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/JoshuaRoy1883"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <FaTwitter size={30} />
            </a>
          </div>
          <div>
            <a
              href="/Resume_Roy_Joshua_Lasrado.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700 cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="flex  items-center justify-center w-full md:w-1/2">
        <img
  src={ProfPic}
  alt="my profile"
  className="rounded-full mx-20 w-52 h-52 md:w-80 md:h-80 object-cover"
/>

</div>
      </div>
    </div>
  );
};

export default Home;
