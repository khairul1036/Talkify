"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <div
        className={`fixed inset-0 md:w-64 w-48 bg-indigo-700 text-white transition-transform duration-300 md:translate-x-0 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="text-2xl font-bold mb-6 border-b border-gray-400 pb-2">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-4xl text-white">
                Talkify
              </Link>
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:bg-indigo-800 p-2 rounded transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:bg-indigo-800 p-2 rounded transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:bg-indigo-800 p-2 rounded transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Button (Hamburger) */}
      <button
        className="md:hidden absolute top-6 left-1"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
