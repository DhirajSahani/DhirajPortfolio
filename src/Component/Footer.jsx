import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import dhirajlogo from "../assets/dhirajlogo.jpeg";

export default function Footer() {
  // Default map location: Malahi, Rautahat, Nepal
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps?q=Malahi,+Garuda,+Rautahat,+Nepal&output=embed"
  );

  useEffect(() => {
    // Try to get current location without API key
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Embed Google Maps without API key using latitude/longitude
          const url = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
          setMapSrc(url);
        },
        (error) => {
          console.warn("Geolocation not available or permission denied. Using default Malahi location.");
        }
      );
    }
  }, []);

  return (
    <footer className="bg-gray-900 text-white mt-1">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={dhirajlogo} alt="logo" className="w-24 h-24 mb-4 rounded-full shadow-lg" />
          <h4 className="text-green-500 font-bold uppercase text-lg">Your Vision</h4>
          <h5 className="text-gray-300 italic font-semibold mb-3">My Design</h5>
          <p className="text-gray-400 text-sm md:text-base">
            “I’m Dhiraj Kr Sahani, a passionate Full Stack Developer dedicated to building modern, scalable, and user-friendly web applications. I specialize in MERN Stack (MongoDB, Express.js, React.js, Node.js), JavaScript, TailwindCSS, Next.js, HTML, CSS, and also provide WordPress development solutions.”
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-green-500 font-bold uppercase mb-4">Contact Me</h4>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-green-400" />
            <span>+977 9704603750</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-green-400" />
            <span>dhirajsahani998@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-green-400" />
            <span>Garuda, Malahi-03, Rautahat, Nepal</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://www.facebook.com/dhiraj.sahani.773126" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaFacebook />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaInstagram />
            </a> */}
            <a href="https://linkedin.com/in/erdhiraj-sahani-baaa9020a" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/DhirajSahani" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="location-map"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className="bg-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Er. Dhiraj Kr Sahani. All rights reserved.
      </div>
    </footer>
  );
}
