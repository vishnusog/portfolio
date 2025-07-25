import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MeLogo, mePic_3 } from "../../assets";
import Scroller from "../../components/Scroller";
import { gsap } from "gsap";

function Home() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, x: -300 },
      { opacity: 1, duration: 1, delay: 0.3, x: 0 }
    );

    // gsap.fromTo(
    //   h2Ref.current,
    //   { opacity: 0 },
    //   { opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
    // );
    // gsap.fromTo(
    //   pRef.current,
    //   { opacity: 0,x: -300 },
    //   { opacity: 1, duration: 1, delay: 0.9, x: 0 }
    // );
  }, []);

  return (
    <div>
      <section className="container mx-auto px-5 py-20 flex flex-col md:flex-row justify-center gap-8 ">
        <div ref={h1Ref} className=" flex-1 flex flex-col justify-center">
          <h2 className="md:text-xl uppercase ">Vishnu R _</h2>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-5 mt-2 uppercase">
            UI/UX Design Developer_<span className="text-rose-700">.</span>
          </h1>
          <p ref={pRef}>
            I craft clean user interfaces and build modern web apps with React,
            Vite.js, and Tailwind CSS.
          </p>
          <div className="gap-8 flex items-center mt-5">
            <HashLink
              to="#work"
              className=" bg-cyan-500 px-6 py-2 rounded-md text-white text-lg border-cyan-500 shadow-lg shadow-cyan-500/50  hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50 hover:border-none hover:inset-shadow-amber-700 ease-in-out duration-75 font-bold"
            >
              Portfolio
            </HashLink>
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
      {/* About Page */}
      <section className="px-5 py-15 container mx-auto">
        <h1 className="text-4xl lg:text-5xl xl:text-3xl font-bold text-teal-600">
          About Me_.
        </h1>
        <div className="mt-1 flex flex-col lg:flex-col gap-10 items-center  2xl:flex-row  ">
          <img src={mePic_3} alt="Vishnu R" width="750" className="mt-10" />
          <div className="flex flex-col gap-5 p-1">
            <p className="mt-4 text-lg md:text-2xl ">
              I craft sleek, user-friendly interfaces and build fast, responsive
              web apps using modern tools like React, Vite.js, and Tailwind CSS.
            </p>
            <p className="">
              With a strong sense of design and attention to detail, I merge
              creativity with code to deliver meaningful digital experiences.
            </p>
            <div className="mt-5">
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
      <section className="px-5 py-15 bg-teal-600 text-white">
        <div>
          <h1 className=" container mx-auto text-4xl lg:text-5xl xl:text-3xl font-bold text-teal-800">
            Portfolio_.
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
