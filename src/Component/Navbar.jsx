import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to home page on browser refresh
  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []); // run once on mount

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active link styling
  const getLinkClass = (path) =>
    `px-3 py-2 transition-colors duration-300 
     rounded-md hover:bg-yellow-400 hover:text-gray-900 
     ${location.pathname === path ? "bg-yellow-400 text-gray-900 font-bold" : ""}`;

  return (
   <nav
  className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-md"
  ref={menuRef}
>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/">My-Portfolio</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:items-center gap-6 text-lg font-medium">
          <li><Link to="/" className={getLinkClass("/")}>Home</Link></li>
          <li><Link to="/about" className={getLinkClass("/about")}>About</Link></li>
          <li><Link to="/services" className={getLinkClass("/services")}>Services</Link></li>
          <li><Link to="/projects" className={getLinkClass("/projects")}>Projects</Link></li>
          <li><Link to="/resume" className={getLinkClass("/resume")}>Resume</Link></li>
          <li><Link to="/contact" className={getLinkClass("/contact")}>Contact</Link></li>
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white transition-max-height duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
          <li><Link to="/" className={getLinkClass("/")} onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={getLinkClass("/about")} onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/services" className={getLinkClass("/services")} onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/projects" className={getLinkClass("/projects")} onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/resume" className={getLinkClass("/resume")} onClick={() => setOpen(false)}>Resume</Link></li>
          <li><Link to="/contact" className={getLinkClass("/contact")} onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
