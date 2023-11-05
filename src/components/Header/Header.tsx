import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mediaLinks } from "./mediaLinks";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderMediaLinks = (additionalStyles = "") =>
    mediaLinks.map((link) => (
      <a
        key={link.name}
        href={link.link}
        className={`mx-4 ${additionalStyles}`}
        aria-label={link.description}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={link.icon}
          alt={link.name}
          className="w-6 h-6"
          style={{ filter: "invert(1)" }}
        />
      </a>
    ));

  return (
    <header className="bg-[#9C8B7E] text-white p-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl lg:ml-9 md:ml-9 sm:ml-2">
            CHRIS LUU
          </Link>

          {/** TODO: Create Projects and Blog page */}

          {/* <div className="hidden sm:flex">
          <Link to="/projects" className="mx-2">
            Projects
          </Link>
          <Link to="/blog" className="mx-2">
            Blog
          </Link>
        </div> */}
        </div>

        {/* Hamburger menu button for small screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden" // This will only show the button on small screens
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            // SVG for "X" icon
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
              />
            </svg>
          ) : (
            // SVG for full hamburger menu icon
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 14"
            >
              <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
            </svg>
          )}
        </button>

        {/* Navigation Links - Visible on larger screens */}
        <nav className="hidden sm:flex items-center">{renderMediaLinks()}</nav>

        {/* Mobile menu (full-screen overlay) */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-20">
            <div
              className="fixed inset-0 bg-black bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <nav className="fixed top-0 right-0 bottom-0 w-full bg-[#9C8B7E] p-4 flex flex-col justify-between">
              <div className="flex justify-end">
                <button onClick={() => setIsMenuOpen(false)}>
                  {/* X Icon SVG */}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                    />
                  </svg>
                </button>
              </div>
              {/* Navigation links */}
              <div className="flex flex-col items-center">
                <Link
                  to="/"
                  className="py-2 px-4 text-white text-xl font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <p className="py-2 px-4 text-gray-200">
                  Projects and Blog coming soon!
                </p>
                {/** TODO: Create Projects and Blog page */}
                {/* <Link
                to="/projects"
                className="py-2 px-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="py-2 px-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link> */}
              </div>
              {/* Social links */}
              <div className="flex justify-center pb-4">
                {renderMediaLinks("w-8 h-8")} {/* Adjust size as necessary */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
