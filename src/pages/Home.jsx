import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import profile from "../assets/dhirajpp.png";
import popupImg from "../assets/erp.jpeg"; // 👉 your uploaded image
import cvfile from "../assets/hireme.pdf"; // 👉 your uploaded CV file

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

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

      {/* ================= FULL SCREEN POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-5 right-5 text-white text-3xl z-50 hover:text-red-400 transition"
          >
            ❌
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-4">

            <img
              src={popupImg}
              alt="ERP Executive"
              className="
                max-w-full 
                max-h-full 
                object-contain 
                rounded-xl 
                shadow-2xl 
                animate-fadeIn
              "
            />

          </div>
        </div>
      )}

      {/* ================= MAIN WEBSITE ================= */}

      <section className="relative bg-gray-900 text-white flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 py-20 md:py-32 overflow-hidden">

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>

        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I’m Dhiraj Kumar
          </h1>

          <p className="text-lg md:text-xl max-w-xl mb-8">
            Currently working as an{" "}
            <span className="text-blue-400 font-semibold">ERP Executive</span>,{" "}
            <span className="text-pink-400 font-semibold">
              at SJS Enterprises Ltd, Bangalore,
            </span>{" "}
            <span className="text-green-400 font-semibold">India.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition">
              Hire Me
            </button>

            <a
              href={cvfile}
              download="Dhiraj_Sahani_CV.pdf"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition text-center"
            >
              📄 Download CV
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center">
          <img
            src={profile}
            alt="Dhiraj Kumar Sahani"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;