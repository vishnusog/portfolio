import React from "react";
import { Link, NavLink } from "react-router-dom";
import { bgPic, Vlogo } from "../assets";

const activeClassName = "text-teal-700";

function Navigation() {
  return (
    <>
      {/* <div className="fixed right-0 top-0 -z-10 translate-y-[-70%]">
        <img src={bgPic} alt="Background Pic" className="w-full" />
      </div> */}
      <nav
        className="container mx-auto  flex flex-col md:flex md:justify-between md:items-center md:flex-row justify-center items-center p-4 border-gray-400 border-b-2"
        aria-label="Main Navigation"
      >
        <Link to="/" className=" font-bold  text-lg   ml-2 flex items-center">
          <img src={Vlogo} alt="Vishnu R" width="30" height="15" />
          ishnu_R
        </Link>
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Work
            </NavLink>
          </li>
            <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <Link
          to="/contact"
          className="flex items-center gap-3 font-bold border-cyan-500  rounded-md text-white text-lg hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50 hover:border-none ease-in-out duration-75 p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:inset-shadow-amber-700"
          aria-label="Contact Me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
          Let's Connect
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
