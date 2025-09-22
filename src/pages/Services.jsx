import React from "react";
import Footer from "../Component/Footer";

const Services = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800">
        {/* Header Section */}
        <section className="text-center py-16 px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            I specialize in building{" "}
            <span className="font-semibold text-blue-600">modern</span>,{" "}
            <span className="font-semibold text-purple-600">scalable</span>, and{" "}
            <span className="font-semibold text-pink-600">user-friendly</span>{" "}
            web applications using{" "}
            <span className="font-semibold">MERN Stack</span>,{" "}
            <span className="font-semibold">JavaScript</span>, and{" "}
            <span className="font-semibold">TailwindCSS</span>. I also provide{" "}
            <span className="font-semibold text-indigo-600">
              WordPress solutions
            </span>{" "}
            with frontend and backend customization.
          </p>
        </section>

        {/* Services Grid Section */}
        <section className="px-6 py-16 md:px-20">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold mb-3">React.js Development</h3>
              <p>
                Building interactive, fast, and scalable frontend interfaces
                with React.js and modern UI libraries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-green-400 to-teal-500 text-white text-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold mb-3">MERN Stack Solutions</h3>
              <p>
                End-to-end web app development with MongoDB, Express.js,
                React.js, and Node.js for robust and scalable solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Responsive UI/UX</h3>
              <p>
                Crafting modern, mobile-friendly, and visually appealing
                interfaces with TailwindCSS and custom designs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-pink-400 to-red-500 text-white text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
              <p>
                Developing secure, efficient, and scalable server-side
                applications with Node.js and Express.js.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">WordPress Development</h3>
              <p>
                Customizing themes, plugins, and building user-friendly
                WordPress websites tailored to client needs.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-red-400 to-pink-600 text-white text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Full Stack Projects</h3>
              <p>
                Delivering complete full stack solutions with seamless
                integration between frontend and backend systems.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
        <section className="px-6 py-16 md:px-20 text-center bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl mx-6 md:mx-20 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Why Work With Me?</h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg md:text-xl">
            I combine{" "}
            <span className="font-semibold text-blue-600">
              technical expertise
            </span>{" "}
            with{" "}
            <span className="font-semibold text-purple-600">
              creative problem-solving
            </span>{" "}
            to deliver high-quality{" "}
            <span className="font-semibold text-green-600">full stack</span>{" "}
            applications. Every project is completed with{" "}
            <span className="font-semibold text-pink-600">precision</span>,{" "}
            <span className="font-semibold text-indigo-600">efficiency</span>,
            and a focus on creating user-friendly digital experiences.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
