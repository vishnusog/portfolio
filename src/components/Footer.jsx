import React from "react";
import { Link } from "react-router-dom";
import { Vlogo } from "../assets";

function Footer() {
  return (
    <div className="p-5 bg-teal-500 text-white">
      <Link to="/" className=" font-bold  text-lg   ml-2 flex items-center">
        <img src={Vlogo} alt="Vishnu R" width="30" height="15" />
        ishnu_R
      </Link>
      <div className="flex justify-around items-center mt-10">
        <ul className="text-white font-mono gap-3">
          <li>
            <Link to="insa" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
              GitHub
            </Link>
          </li>
          <li>
            <Link to="insa" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link to="TDNN" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
              YouTube
            </Link>
          </li>
          <li>
            <Link to="TDNN" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
              The Deaf Next Network
            </Link>
          </li>
        </ul>
        <div>
          <h1 className="text-7xl">
            <Link>Let's Connect</Link>
          </h1>
          <address> Thiruvananthapuram, Kerala </address>
        </div>
      </div>
      <code className="flex justify-center mt-20">
        © 2025 Vishnu R. | Designed & Developed by me | Accessibility First ♿ |
        Sign Language Friendly 🤟
      </code>
    </div>
  );
}

export default Footer;
