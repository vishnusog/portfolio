import React, { useRef, useEffect } from "react";
import { data, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MeLogo, mePic_3, NerveDigital, ui } from "../../assets";
import Scroller from "../../components/Scroller";
import { gsap } from "gsap";
import { dataCollect } from "../../data";

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
    <div className="">
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
              to="#portfolio"
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
          About Me_
        </h1>
        <div className="mt-1 flex flex-col lg:flex-col gap-10 items-center  2xl:flex-row  ">
          <img src={mePic_3} alt="Vishnu R" width="700" className="mt-10" />
          <div className="flex flex-col gap-5 p-1">
            <p className="mt-4 text-lg md:text-2xl ">
              I craft sleek, user-friendly interfaces and build fast, responsive
              web apps using modern tools like React, Vite.js, and Tailwind CSS.
            </p>
            <p className="">
              With a strong sense of design and attention to detail, I merge
              creativity with code to deliver meaningful digital experiences.
            </p>
            <div className="mt-2">
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
      {/* cards */}
      <section className="container mx-auto px-5 py-20 ">
        <h1 className="text-4xl lg:text-5xl xl:text-3xl font-bold text-teal-500">
          Portfolio_
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-15">
          {dataCollect.map((item, index) => (
            <div className="borderBox flex justify-between bg-cyan-500 ">
              <div className="flex flex-col justify-between py-5 px-3 ">
                <h1 className="bg-green-200 p-[.2rem] rounded-[5px] font-bold text-lg">
                  {item.category}
                </h1>
                <Link to={item.link} className="flex gap-2 items-center">
                  Read more
                   <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="22.88px"
                    height="22.88px"
                    viewBox="0 0 122.88 122.88"
                    enable-background="new 0 0 122.88 122.88"
                    xml:space="preserve"
                  >
                    <g>
                      <path d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z" />
                    </g>
                  </svg>
                </Link>
              </div>
              <img
                src={item.thumbnail}
                width="190"
                alt={item.alt}
                className=""
                loading="lazy"
              />
            </div>
          ))}
           {dataCollect.map((item, index) => (
            <div className="borderBox flex justify-between bg-teal-400">
              <div className="flex flex-col justify-between py-5 px-3 ">
                <h1 className="bg-green-200 p-[.2rem] rounded-[5px] font-bold text-lg">
                  {item.category}
                </h1>
                <Link to={item.link} className="flex gap-2 items-center">
                  Read more
                   <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="22.88px"
                    height="22.88px"
                    viewBox="0 0 122.88 122.88"
                    enable-background="new 0 0 122.88 122.88"
                    xml:space="preserve"
                  >
                    <g>
                      <path d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z" />
                    </g>
                  </svg>
                </Link>
              </div>
              <img
                src={item.thumbnail}
                width="190"
                alt={item.alt}
                className=""
                loading="lazy"
              />
            </div>
          ))}
           {dataCollect.map((item, index) => (
            <div className="borderBox flex justify-between bg-cyan-500 ">
              <div className="flex flex-col justify-between py-5 px-3 ">
                <h1 className="bg-green-200 p-[.2rem] rounded-[5px] font-bold text-lg">
                  {item.category}
                </h1>
                <Link to={item.link} className="flex gap-2 items-center">
                  Read more
                   <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="22.88px"
                    height="22.88px"
                    viewBox="0 0 122.88 122.88"
                    enable-background="new 0 0 122.88 122.88"
                    xml:space="preserve"
                  >
                    <g>
                      <path d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z" />
                    </g>
                  </svg>
                </Link>
              </div>
              <img
                src={item.thumbnail}
                width="190"
                alt={item.alt}
                className=""
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
