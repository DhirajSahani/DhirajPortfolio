import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import profile from "../assets/dhirajpp.png";
import cvfile from "../assets/dhirajcv.pdf";

const Home = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    const handleKeyDown = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && e.key.toLowerCase() === "s") ||
        (e.metaKey && e.key.toLowerCase() === "s")
      ) {
        e.preventDefault();
        navigator.clipboard.writeText("");
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
        
        {/* Background Effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>

        {/* Text */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I’m Dhiraj Kumar
          </h1>

          <p className="text-lg md:text-xl max-w-xl mb-8">
            Currently working as an{" "}
            <span className="text-blue-400 font-semibold">ERP Executive</span>,{" "}
            <span className="text-pink-400 font-semibold">at SJS Enterprises Ltd, Bangalore,</span>{" "}
           <span className="text-green-400 font-semibold">Inida.</span>{" "}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            {/* Hire Me */}
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition">
              Hire Me
            </button>

            {/* Download CV */}
            <a
              href={cvfile}
              download="Dhiraj_Sahani_CV.pdf"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition text-center"
            >
              📄 Download CV
            </a>

          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center">
          <img
            src={profile}
            alt="Dhiraj Kumar Sahani"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 md:px-20 bg-gradient-to-b from-blue-50 to-purple-50">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "⚛️", title: "React.js Development", desc: "Interactive UI with React.", gradient: "from-blue-500 to-indigo-500" },
            { icon: "🖥️", title: "MERN Stack", desc: "Full-stack web apps.", gradient: "from-green-400 to-emerald-500" },
            { icon: "🎨", title: "UI/UX Design", desc: "Modern responsive design.", gradient: "from-purple-400 to-pink-500" },
            { icon: "⚙️", title: "Backend", desc: "APIs with Node & Express.", gradient: "from-pink-400 to-red-500" },
            { icon: "🌐", title: "WordPress", desc: "Custom CMS solutions.", gradient: "from-yellow-400 to-orange-500" },
            { icon: "🚀", title: "Projects", desc: "End-to-end solutions.", gradient: "from-red-400 to-pink-600" },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r ${item.gradient} text-white`}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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