import React from "react";
import { Link } from "react-router-dom";
import { MeLogo, mePic_1, mePic_2, mePic_3 } from "../../assets";
import Scroller from "../../components/Scroller";

function Home() {
  return (
    <div>
      <section className="container mx-auto px-5 py-20 flex flex-col md:flex-row justify-center gap-8 ">
        <div className=" flex-1 flex flex-col justify-center">
          <h2 className="md:text-xl uppercase ">Vishnu R _</h2>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-5 mt-2 uppercase">
            UI/UX Design Developer_<span className="text-rose-700">.</span>
          </h1>
          <p>
            I craft clean user interfaces and build modern web apps with React,
            Vite.js, and Tailwind CSS.
          </p>
          <div className="gap-8 flex items-center mt-5">
            <Link
              to="/work"
              className=" bg-cyan-500 px-6 py-2 rounded-md text-white text-lg border-cyan-500 shadow-lg shadow-cyan-500/50  hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50 hover:border-none hover:inset-shadow-amber-700 ease-in-out duration-75 font-bold"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-teal-700 text-lg flex items-center gap-4"
            >
              Let's Connect
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
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={MeLogo}
            alt="Vishnu R"
            width="450"
            height=""
            className=" bg-teal-700 shadow-lg shadow-teal-700/50 hover:border-none hover:inset-shadow-amber-700"
          />
        </div>
      </section>
      <Scroller />
      <section className="px-5 py-15 container mx-auto">
        <h1 className="uppercase"> About me _</h1>
        <div className="mt-15 flex  items-center">
          <img src={mePic_3} alt="Vishnu R" width="750" className="-ml-30 " />
          <div className="flex flex-col gap-8">
            <p className="mt-4 text-lg ">
              I design intuitive interfaces and develop responsive, scalable web
              applications using modern tools like React, Vite.js, and Tailwind
              CSS. With a strong eye for design and detail, I bridge the gap
              between user experience and engineering.
            </p>
            <p>
              🛠️ I also explore cybersecurity platforms like TryHackMe to better
              understand secure web practices.
            </p>
            <p>👉 Let’s build something impactful together.</p>
            <div>
              <Link
                to="/about"
                className="p-2 text-lg text-white rounded-md bg-cyan-500 border-cyan-500 shadow-lg shadow-cyan-500/50  hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50 hover:border-none hover:inset-shadow-amber-700 ease-in-out duration-75 hover:text-white"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
