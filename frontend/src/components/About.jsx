import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full pt-14 bg-black text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl py-3">
          Hello, I'm Roy Joshua Lasrado, from Mangaluru, Karnataka, India. Currently in my third year of Computer Science and Engineering at St Joseph Engineering College, I am driven by a deep passion for technology and a strong desire to share knowledge in my journey as an aspiring engineer.
        </p>
        <br />
        <p className="text-xl">
          Beyond technology, I have a deep affection for plants and nature. I find solace in nurturing greenery and appreciate the tranquility they bring to spaces. This love for plants underscores my belief in sustainability and drives me to seek harmony between technological advancement and environmental stewardship.
        </p>
      </div>
    </div>
  );
};

export default About;
