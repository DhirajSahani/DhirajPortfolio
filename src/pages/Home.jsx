import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import profile from "../assets/dhirajlogo.jpeg";

const Home = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable PrintScreen & Save
    const handleKeyDown = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && e.key.toLowerCase() === "s") ||
        (e.metaKey && e.key.toLowerCase() === "s")
      ) {
        e.preventDefault();
        navigator.clipboard.writeText(""); // Clear clipboard
        alert("Screenshot / Save disabled for security.");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800 select-none">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 py-20 md:py-32 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Text Content */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I’m Dhiraj Kr Sahani
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            Full Stack Developer skilled in{" "}
            <span className="font-semibold text-blue-400">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js),{" "}
            <span className="font-semibold text-pink-400">JavaScript</span>, and{" "}
            <span className="font-semibold text-purple-400">TailwindCSS</span>. Experienced in frontend & backend development with additional expertise in{" "}
            <span className="font-semibold text-indigo-400">Next.js</span> and{" "}
            <span className="font-semibold text-green-400">WordPress customization</span>.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition mb-6 md:mb-0">
            Hire Me
          </button>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 z-10 relative flex justify-center">
          <img
            src={profile}
            alt="Dhiraj Kumar Sahani"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl border-4 border-white relative z-10"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 md:px-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I provide{" "}
            <span className="font-semibold text-blue-600">full stack web development</span> solutions using the latest
            technologies, focusing on{" "}
            <span className="font-semibold text-purple-600">modern design</span>,{" "}
            <span className="font-semibold text-pink-600">scalability</span>, and{" "}
            <span className="font-semibold text-indigo-600">performance</span>.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "⚛️",
              title: "React.js Development",
              desc: "Building interactive and fast user interfaces with React.js and modern UI frameworks.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              icon: "🖥️",
              title: "MERN Stack Solutions",
              desc: "Full-stack apps with MongoDB, Express.js, React.js, and Node.js for robust performance.",
              gradient: "from-green-400 to-emerald-500",
            },
            {
              icon: "🎨",
              title: "Responsive UI/UX",
              desc: "Modern, mobile-friendly, and visually appealing designs using TailwindCSS.",
              gradient: "from-purple-400 to-pink-500",
            },
            {
              icon: "⚙️",
              title: "Backend Development",
              desc: "Secure and scalable APIs and server-side applications built with Node.js & Express.js.",
              gradient: "from-pink-400 to-red-500",
            },
            {
              icon: "🌐",
              title: "WordPress Development",
              desc: "Custom WordPress themes, plugins, and CMS solutions tailored to client needs.",
              gradient: "from-yellow-400 to-orange-500",
            },
            {
              icon: "🚀",
              title: "Full Stack Projects",
              desc: "Delivering end-to-end full stack applications with seamless integration.",
              gradient: "from-red-400 to-pink-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r ${item.gradient} text-white`}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full mb-6 text-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
