import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Scroller() {
  return (
    <section>
      <Marquee className="py-2 items-center  bg-teal-500" pauseOnHover gradient={false}>
        <Link to="/contact" className="mr-[5rem] flex  gap-10 text-white">
          <p>Let's get work!</p> <p>Have a project in mind?</p>
        </Link>
      </Marquee>
    </section>
  );
}

export default Scroller;
