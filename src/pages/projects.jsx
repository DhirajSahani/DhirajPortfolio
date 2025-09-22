import React from "react";

import store from "../assets/store.PNG";
import portfolio from "../assets/portfolio.PNG";
import garuda from "../assets/garuda.PNG";
import Footer from "../Component/Footer";

// Example project data with different images
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A professional personal portfolio website developed using React and TailwindCSS, showcasing skills, projects, and experience with a modern, responsive design.",
    image: portfolio,
    link: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "wooCommerce Store",
    description: "WooCommerce is a WordPress plugin that lets you create and manage an online store, handling products, payments, shipping, and more with ease.",
    image: store,
    link: "https://erdhiraj.free.nf/apanastore/?i=2",
  },
  {
    id: 3,
    title: "Garuda Nagarpalika Website",
    description: "Garuda Nagarpalika, located in Rautahat, Province-2, Nepal, is a local municipality working to improve civic services, infrastructure. This project is built using React.js and TailwindCSS, showcasing a modern, responsive design for the municipality’s online presence.",
    image: garuda,
    link: "https://garudanagarpalika.netlify.app",
  },
//   {
//     id: 4,
//     title: "Task Manager",
//     description: "A task management app with drag-and-drop functionality.",
//     image: evnp,
//     link: "https://github.com/yourusername/task-manager",
//   },
];

export default function Projects() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
        My Projects
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div className="w-full h-64 sm:h-60 md:h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
