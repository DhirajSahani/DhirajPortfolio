import React from "react";
import Footer from "../Component/Footer";

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-gray-800">
        {/* Header Section */}
        <section className="text-center py-16 px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            I’m <span className="font-semibold text-blue-600">Dhiraj Kr Sahani</span>, a passionate{" "}
            <span className="font-semibold text-purple-600">Full Stack Developer</span> dedicated to building modern, scalable, and user-friendly web applications. I specialize in{" "}
            <span className="text-green-600 font-medium">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js),{" "}
            <span className="text-pink-600 font-medium">JavaScript</span>, <span className="text-indigo-600 font-medium">TailwindCSS</span>,{" "}
            <span className="text-yellow-600 font-medium">Next.js</span>, <span className="text-orange-600 font-medium">HTML</span>,{" "}
            <span className="text-red-500 font-medium">CSS</span>, and also provide{" "}
            <span className="text-teal-600 font-medium">WordPress development</span> solutions.
          </p>
        </section>

        {/* Skills / Tools Section */}
        <section className="px-6 py-16 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Skills & Tools</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* HTML */}
            <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">HTML</h3>
              <p className="text-sm">Structuring modern, semantic, and accessible web pages.</p>
            </div>

            {/* CSS */}
            <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">CSS</h3>
              <p className="text-sm">Designing responsive, visually appealing layouts and animations.</p>
            </div>

            {/* React.js */}
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold mb-2">React.js</h3>
              <p className="text-sm">Building interactive and responsive user interfaces.</p>
            </div>

            {/* MERN Stack */}
            <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold mb-2">MERN Stack</h3>
              <p className="text-sm">Full stack development with MongoDB, Express, React, and Node.js.</p>
            </div>

            {/* TailwindCSS */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">TailwindCSS</h3>
              <p className="text-sm">Creating modern, responsive, and visually appealing designs.</p>
            </div>

            {/* Node.js & Express.js */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Node.js & Express.js</h3>
              <p className="text-sm">Developing secure, scalable backend APIs and server-side applications.</p>
            </div>

            {/* Next.js */}
            <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Next.js</h3>
              <p className="text-sm">Optimized React applications with server-side rendering and routing.</p>
            </div>

            {/* WordPress */}
            <div className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">WordPress</h3>
              <p className="text-sm">Custom themes, plugins, and CMS solutions for client websites.</p>
            </div>
          </div>
        </section>

        {/* Personal Information Section */}
        <section className="px-6 py-16 md:px-20 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl mx-6 md:mx-20 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-800">
            <div className="space-y-4">
              <p><span className="font-semibold text-blue-600">Name:</span> Dhiraj Kr Sahani</p>
              <p><span className="font-semibold text-blue-600">Date of Birth:</span> 18/04/1998</p>
              <p><span className="font-semibold text-blue-600">Marital Status:</span> Single</p>
              <p><span className="font-semibold text-blue-600">Contact No:</span> +977 9704603750</p>
              <p><span className="font-semibold text-blue-600">Email:</span> dhirajsahani998@gmail.com</p>
              <p><span className="font-semibold text-blue-600">Address:</span> Garuda,Malahi-03,Rautaht,Nepal</p>
            </div>
            <div className="space-y-4">
              <p><span className="font-semibold text-blue-600">Hobbies:</span></p>
              <ul className="list-disc list-inside">
                <li>Coding and learning new technologies</li>
                <li>Building projects</li>
                <li>Reading tech blogs and tutorials</li>
                <li>Traveling and exploring new places</li>
                <li>Photography</li>
                <li>Listening to music</li>
                
              </ul>
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
        <section className="px-6 py-16 md:px-20 text-center bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl mx-6 md:mx-20 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg md:text-xl">
            I combine <span className="font-semibold text-blue-600">technical expertise</span> with <span className="font-semibold text-purple-600">creative problem-solving</span> to deliver high-quality web applications. Each project is developed with <span className="font-semibold text-green-600">precision</span>, <span className="font-semibold text-pink-600">efficiency</span>, and a focus on creating <span className="font-semibold text-indigo-600">user-friendly digital experiences</span>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
