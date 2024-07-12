import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import androidSDK from "../assets/android.jpeg";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import linux from "../assets/linux.png";
import python from "../assets/python.png";
import selenium from "../assets/selenium.png";
import mysql from "../assets/sql.png";
import postman from "../assets/postman.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: androidSDK,
      title: "AndroidSDK",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: linux,
      title: "Linux",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: selenium,
      title: "Selenium",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: mysql,
      title: "MySQL",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: postman,
      title: "Postman",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      id="technology"
      className="bg-black pt-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Technology
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
