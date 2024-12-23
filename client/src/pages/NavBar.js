import { NavLink } from "react-router-dom";
import { useState } from "react";

// NavBar component for site navigation
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-950 shadow-md relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-serif text-xl text-orange-100 font-bold">
            <h2>Story Sphere</h2>
          </div>
          
          {/* Hamburger button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-orange-100 hover:text-orange-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:relative top-full left-0 right-0 bg-yellow-950 md:bg-transparent md:top-auto z-50`}>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
              <NavLink 
                to="/" 
                className="text-orange-100 hover:text-orange-200 block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="text-orange-100 hover:text-orange-200 block"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/blogPage" 
                className="text-orange-100 hover:text-orange-200 block"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/storypage" 
                className="text-orange-100 hover:text-orange-200 block"
                onClick={() => setIsOpen(false)}
              >
                Story List
              </NavLink>
              <NavLink 
                to="/events" 
                className="text-orange-100 hover:text-orange-200 block"
                onClick={() => setIsOpen(false)}
              >
                Events
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
