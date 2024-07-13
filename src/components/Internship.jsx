import React from "react";

const Internship = () => {
  const experiences = [
    {
      role: "Android Software Developer Intern",
      company: "LCode Technologies Private Limited",
      duration: "October 2023 - November 2023",
      description: [
        "Dived into the world of mobile app development, working on Android Studio. Honed my skills in Java, Android Studio, UI/UX design, and gained valuable insights into Android app development with Java.",
        "Crafted a fun Tic-Tac-Toe Game, robust Login and Sign-up interfaces for mobile applications."
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-full bg-black text-white pt-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Internship
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-50 p-6 rounded-lg transform transition duration-500 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2">{experience.role}</h3>
              <h4 className="text-xl font-medium text-gray-400">
                {experience.company}
              </h4>
              <p className="text-lg text-gray-400">{experience.duration}</p>
              <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;
