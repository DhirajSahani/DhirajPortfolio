import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import profile from "../assets/dhirajlogo.jpeg";
import digree from "../assets/digree.jpg";
import merncer from "../assets/merncer.jpg";
import env from "../assets/intermediate.png";
import certificate from "../assets/certificate.png";
import sca from "../assets/sca.jpg";
import dainik from "../assets/dainik.jpg";
import nec from "../assets/Dataentry.png";
import digital from "../assets/digital.jpg";
import Footer from "../Component/Footer";

const Resume = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Fixed: added file names for download
  const certificates = [
    { img: merncer, name: "MERN Stack Certificate", file: "mern.jpg" },
    { img: digree, name: "Bachelor Degree", file: "degree.jpg" },
    { img: env, name: "+2 Certificate", file: "intermediate.png" },
    { img: certificate, name: "Mark Sheet Engineering", file: "marksheet.png" },
    { img: sca, name: "C & C++ Certificate", file: "ccpp.jpg" },
    { img: dainik, name: "Dainik Bhaskar Certificate", file: "dainik.jpg" },
    { img: nec, name: "Experience Certificate", file: "experience.png" },
    { img: digital, name: "Digital Marketing", file: "digital.jpg" },
  ];

  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 text-gray-800 px-6 md:px-20 py-16">

        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A summary of my education, experience, skills, and achievements.
          </p>
        </section>

        {/* Profile */}
        <section className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg p-8 mb-12">
          <img
            src={profile}
            alt="Dhiraj"
            className="w-40 h-40 rounded-2xl mb-6 md:mb-0 md:mr-12"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Dhiraj Kr Sahani</h2>
            <p className="text-gray-600 mb-2">Full Stack Developer</p>
            <p className="text-gray-600 mb-2">Email: dhirajsahani998@gmail.com</p>
            <p className="text-gray-600 mb-2">Phone: +91 8235515905</p>
            <p className="text-gray-600">Location: Bangalore, India</p>
          </div>
        </section>
        {/* Education Section */} {/* Education Section */} <section className="mb-12"> <h3 className="text-3xl font-bold text-center mb-8"> Education <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Background</span> </h3> <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 max-w-6xl mx-auto"> {/* Bachelor */} <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 min-w-[250px]"> <h4 className="text-2xl font-semibold">Bachelor Degree in Computer Science & Engineering</h4> <p className="text-gray-600 italic mb-2"> Sagar Institute of Science, Technology & Research, Bhopal, Madhya Pradesh, India with 7.79 CGPA </p> <p className="text-gray-600 mb-2 italic">Passout: 2016-2020</p> </div> {/* 12th Class */} <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 min-w-[250px]"> <h4 className="text-2xl font-semibold">12th Class in Science Medium</h4> <p className="text-gray-600 italic mb-2"> M.R. Inter College, Harshidhi, East Champaran, Bihar, India with 50.02% </p> <p className="text-gray-600 mb-2 italic">Passout: 2014-2016</p> </div> {/* 10th Class */} <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 min-w-[250px]"> <h4 className="text-2xl font-semibold">10th Class</h4> <p className="text-gray-600 italic mb-2"> Shree Saraswati Higher Secondary School  with 60.0% </p> <p className="text-gray-600 mb-2 italic">Passout: 2013-2014</p> </div> </div> </section> {/* Work Experience Section */} <section className="mb-12"> <h3 className="text-3xl font-bold text-center mb-8"> Work <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Experience</span> </h3> <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 max-w-6xl mx-auto"> {/* Web Development */} <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 min-w-[280px]"> <h4 className="text-2xl font-semibold">Full Stack Web Developer</h4> <p className="text-gray-600 italic mb-2">Freelance / Self-employed</p> <p className="text-gray-600 mb-2">Duration: 1+ years</p> <ul className="list-disc list-inside text-gray-600"> <li>Developed responsive web applications using MERN stack.</li> <li>Built modern UI with React.js, TailwindCSS, and Next.js.</li> <li>Implemented RESTful APIs with Node.js and Express.js.</li> <li>Worked on WordPress customization and plugin development.</li> <li>Delivered functional and scalable web solutions for clients.</li> </ul> </div> {/* Customer Service / Cashier */} <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 min-w-[280px]"> <h4 className="text-2xl font-semibold">Customer Service Assistant & Cashier</h4> <p className="text-gray-600 italic mb-2">Emarat, UAE – Dubai</p> <p className="text-gray-600 mb-2">Duration: 2.5 years</p> <ul className="list-disc list-inside text-gray-600"> <li>Assisted customers and managed daily transactions efficiently.</li> <li>Handled billing, cash register operations, and payment processing.</li> <li>Provided excellent customer support and resolved queries professionally.</li> </ul> </div> {/* Back Office */} <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 min-w-[280px]"> <h4 className="text-2xl font-semibold">Back Office Executive</h4> <p className="text-gray-600 italic mb-2">Emarat, UAE – Dubai</p> <p className="text-gray-600 mb-2">Same Company</p> <ul className="list-disc list-inside text-gray-600"> <li>Managed office documentation, inventory, and reporting tasks.</li> <li>Coordinated with teams to ensure smooth back-office operations.</li> <li>Maintained records and assisted in administrative tasks efficiently.</li> </ul> </div> </div> </section>

        {/* Certificates */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
                onClick={() => setSelectedImage(cert)} // ✅ FIXED
              >
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="w-full h-60 object-cover"
                />
                <div className="text-center mt-2 font-semibold text-gray-800">
                  {cert.name}
                </div>

                {/* watermark */}
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold opacity-30 pointer-events-none">
                  © Dhiraj
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Single Clean Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">

            {/* Close Icon */}
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>

            {/* Image */}
            <img
              src={selectedImage.img}
              alt={selectedImage.name}
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
            />

            {/* Buttons */}
            <div className="flex gap-4 mt-6">

              {/* Download */}
              <a
                href={selectedImage.img}
                download={selectedImage.file}
                className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition"
              >
                ⬇ Download
              </a>

              {/* Cancel */}
              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition"
              >
                ❌ Cancel
              </button>

            </div>
          </div>
        )}

      </div>

      <Footer />
    </>
  );
};

export default Resume;