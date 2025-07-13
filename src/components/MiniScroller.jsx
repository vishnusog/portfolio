import React from 'react'
import Marquee from 'react-fast-marquee'

function MiniScroller() {
  return (
    <section>
      <Marquee className="py-2 items-center" pauseOnHover gradient={false}>
        <Link to="/contact" className="mr-[5rem] text-lg  font-bold">
          ✨Let's get work! ✨Have a project in mind?
        </Link>
      </Marquee>
    </section>
  )
}

export default MiniScroller
