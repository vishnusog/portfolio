import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Vlogo } from "../assets";

const activeClassName = "text-amber-400";

function Navigation() {
  return (
    
    <nav
      className="container mx-auto  flex flex-col md:flex md:justify-between md:items-center md:flex-row justify-center items-center p-4 border-black border-b-2 "
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
            About
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
  );
}

export default Navigation;
