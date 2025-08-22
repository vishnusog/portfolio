// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { bgPic, Vlogo } from "../assets";

// const activeClassName = "text-teal-700";

// function Navigation() {
//   return (
//     <>
//       <div className="fixed right-0 top-0 -z-10 translate-y-[-70%]">
//         <img src={bgPic} alt="Background Pic" className="w-full" />
//       </div>
//       <nav
//         className="container mx-auto  flex flex-col md:flex md:justify-between md:items-center md:flex-row justify-center items-center p-4 border-gray-400 border-b-2"
//         aria-label="Main Navigation"
//       >
//         <Link to="/" className=" font-bold  text-lg   ml-2 flex items-center">
//           <img src={Vlogo} alt="Vishnu R" width="30" height="15" />
//           ishnu_R
//         </Link>
//         <ul className="flex gap-8">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? activeClassName : undefined
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? activeClassName : undefined
//               }
//             >
//               About Me
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/work"
//               className={({ isActive }) =>
//                 isActive ? activeClassName : undefined
//               }
//             >
//               Work
//             </NavLink>
//           </li>
//             <li>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 isActive ? activeClassName : undefined
//               }
//             >
//               Blog
//             </NavLink>
//           </li>
//         </ul>
//         <Link
//           to="/contact"
//           className="flex items-center gap-3 font-bold border-cyan-500  rounded-md text-white text-lg hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50 hover:border-none ease-in-out duration-75 p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:inset-shadow-amber-700"
//           aria-label="Contact Me"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//             />
//           </svg>
//           Let's Connect
//         </Link>
//       </nav>
//     </>
//   );
// }

// export default Navigation;


// New version Navbar///////
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Vlogo } from "../assets";

function NavigationArea() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Link to="/" className=" font-bold  text-lg   ml-2 flex items-center">
          <img src={Vlogo} alt="Vishnu R" className="w-8 h-8 " />
          <span>ishnu_R</span>
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "="}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-teal-500  transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-8 xl:gap-12 font-medium ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
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
          </ul>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 xl:gap-12 font-medium  ">
        <ul className="flex items-center gap-8 xl:gap-12">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
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
      </div>
    </div>
  );
}

export default NavigationArea;
