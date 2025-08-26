import React from "react";
import favicon from '../assets/favicon.png'
export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] text-gray-300 border-t border-gray-800 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <img src={favicon} alt="Site Logo" className="w-8 h-8" />
            <span className="font-bold text-xl hover:text-purple-500 tracking-tight">MovieHub</span>
          </div>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Find movies you'll love, powered by TMDB & Appwrite.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-semibold mb-1">Navigation</span>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <a href="#" className="hover:text-purple-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#trending"
                className="hover:text-purple-500 transition-colors"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#all-movies"
                className="hover:text-purple-500 transition-colors"
              >
                All Movies
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col  md:items-start gap-2">
          <span className="font-semibold mb-1 mx-auto" >Connect</span>
          <div className="flex gap-4 mt-1">
            <a
              href="https://x.com/cooolCoder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-purple-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shukrullah-shirzad-7271a4123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0077b5] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </a>
            <a
              href="mailto:shukrullah.shirzad.779@gmail.com"
              aria-label="Email"
              className="hover:text-green-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 pb-2 text-center text-xs text-gray-500 bg-[#18181b]">
        &copy; {new Date().getFullYear()} Shukrullah Shirzad. All rights reserved. Built
        with{" "}
        <a
          href="https://appwrite.io/"
          className="text-pink-500 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Appwrite
        </a>{" "}
        &{" "}
        <a
          href="https://vitejs.dev/"
          className="text-purple-400 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite
        </a>
        .
      </div>
    </footer>
  );
}
