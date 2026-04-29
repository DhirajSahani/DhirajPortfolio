import React from "react";
import Footer from "../Component/Footer";

const About = () => {
  const coreSkills = [
    "MS Word",
    "Excel",
    "PowerPoint",
    "ERP Executive",
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-gray-800">

        {/* Header Section */}
        <section className="text-center py-14 px-4 sm:px-6 md:px-20">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          {/* NEW: Skills Boxes (Top) */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
              Core Skills
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white shadow-md border border-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed space-y-6">
            
            <p>
              I am a dedicated and detail-oriented professional with a background in{" "}
              <span className="font-semibold text-blue-600">
                Computer Science Engineering
              </span>{" "}
              and over{" "}
              <span className="font-semibold text-purple-600">
                2.5 years of experience
              </span>{" "}
              in data entry, back-office operations, and ERP system management.
            </p>

            <p>
              Currently, I am working as an{" "}
              <span className="font-semibold text-green-600">
                ERP Executive
              </span>{" "}
              at{" "}
              <span className="font-semibold text-green-600">
                SJS Enterprises Limited, Bangalore
              </span>
              . I manage production data, update ERP systems, and ensure accuracy in daily operations.
            </p>

            <p>
              Previously, I worked in the UAE with{" "}
              <span className="font-semibold text-yellow-600">
                Emarat Company
              </span>{" "}
              as a Back Office Executive, gaining experience in data entry, cashier operations, and customer service.
            </p>

            <p>
              I also have strong technical skills in{" "}
              <span className="font-semibold text-indigo-600">
                MERN Stack Web Development
              </span>{" "}
              along with HTML, CSS, and JavaScript.
            </p>

          </div>
        </section>

        {/* Skills / Tools Section */}
        <section className="px-6 py-16 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            
            {[
              { icon: "🌐", title: "HTML", desc: "Structuring modern web pages.", gradient: "from-orange-400 to-yellow-500" },
              { icon: "🎨", title: "CSS", desc: "Responsive UI & design.", gradient: "from-red-400 to-pink-500" },
              { icon: "⚛️", title: "React.js", desc: "Interactive UI development.", gradient: "from-blue-400 to-indigo-500" },
              { icon: "🖥️", title: "MERN Stack", desc: "Full stack apps.", gradient: "from-green-400 to-teal-500" },
              { icon: "✨", title: "TailwindCSS", desc: "Modern styling framework.", gradient: "from-purple-400 to-pink-500" },
              { icon: "⚙️", title: "Node & Express", desc: "Backend APIs.", gradient: "from-yellow-400 to-orange-500" },
              { icon: "🚀", title: "Next.js", desc: "Optimized React apps.", gradient: "from-pink-400 to-red-500" },
              { icon: "📝", title: "WordPress", desc: "CMS solutions.", gradient: "from-indigo-400 to-purple-600" },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r ${item.gradient} text-white text-center`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Info */}
        <section className="px-6 py-16 md:px-20 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl mx-6 md:mx-20 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Personal Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p><b>Name:</b> Dhiraj Kr Sahani</p>
              <p><b>Marital Status:</b> Single </p>
              <p><b>Contact:</b> +91 8235515905</p>
              <p><b>Email:</b> dhirajsahani998@gmail.com</p>
              <p><b>Location:</b> Bangalore, India</p>
            </div>

            <div>
              <b>Hobbies:</b>
              <ul className="list-disc list-inside mt-2">
                <li>Coding</li>
                <li>Building Projects</li>
                <li>Traveling</li>
                <li>Photography</li>
                <li>Content Creators</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default About;