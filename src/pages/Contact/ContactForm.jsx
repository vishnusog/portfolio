import React, { useRef, useEffect } from "react";
import { socials } from "../../data";
import { gsap } from "gsap";

function ContactForm() {
  const divRef = useRef(null);
  const div2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { opacity: 0, x: -300 },
      { opacity: 1, duration: 1, delay: 0.3, x: 0 }
    );
    gsap.fromTo(
      div2Ref.current,
      { opacity: 0, x: 300 },
      { opacity: 1, duration: 1, delay: 0.9, x: 0 }
    );
  }, []);
  return (
    <>
      <section className="py-12 border-x-2 border-black h-[100vh] flex items-center ">
        <div className="container mx-auto px-4 gap-18 grid lg:grid-cols-2">
          <div ref={divRef}>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 text-teal-600">
              Contact<span className="text-amber-500">_</span>
            </h1>
            <p className="mb-2 text-[1.1rem]">
              Want to get in touch? Whether you need help with your creative
              business, have a question, or just want to connect — the fastest
              way to reach me is via email.
            </p>
            <p className="mb-4 text-[1.1rem] font-bold">
              Want my Email : vishnursog@gmail.com
            </p>
            <div className="text-lg font-bold">Find me on:</div>

            <div className="mb-8">
              <ul className="flex gap-6">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      href={item.link}
                      rel="noopener noreferrer"
                      className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
                    >
                      <img src={item.icon} alt={item.alt} width="" height="" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div ref={div2Ref}>
            <form
              action="https://formspree.io/f/xanjlonp"
              method="post"
              className="gap-2 p-4 flex flex-col"
            >
              <div className=" mb-4 flex flex-col">
                <label for="name" className="form-label mb-2 text-black">
                  Your Name
                </label>
                <input
                  name="Name"
                  required
                  id="name"
                  type="name"
                  className="outline-0 border-gray-800 border-2 pl-2 bg-white p-1 drop-shadow-[10px_-5px_0_rgb(38,166,154)]"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label for="email" className="form-label mb-2 text-black">
                  Your Email:
                </label>
                <input
                  name="Email ID"
                  required
                  id="email"
                  type="email"
                  className="outline-0 border-gray-800 border-2 pl-2 bg-white p-1 drop-shadow-[10px_-5px_0_rgb(38,166,154)]"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label className="form-label mb-2 text-black">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  cols="30"
                  required
                  name="message"
                  className="outline-0 border-gray-800 border-2 pl-2 bg-white drop-shadow-[10px_-5px_0_rgb(38,166,154)]"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <button
                  type="submit"
                  className="px-6 py-4 bg-cyan-500 rounded-md text-white text-lg border-cyan-500 shadow-lg shadow-cyan-500/50  hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50 hover:border-none hover:inset-shadow-amber-700 ease-in-out duration-75 font-bold "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
