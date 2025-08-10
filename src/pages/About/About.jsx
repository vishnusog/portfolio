import React from "react";

function About() {
  return (
    <section className="container mx-auto px-5 py-20">
      <div className="flex flex-col gap-5 mt-20">
        <h1
          className=" text-4xl lg:text-5xl xl:text-3xl font-bold text-teal-500"
          p-1
        >
          {" "}
          Who I Am
        </h1>
        <p className="text-2xl">
          Hello! I’m Vishnu R., a passionate UI/UX Designer, Front-End
          Developer, and Visual Creator with a strong focus on accessible
          digital experiences.
        </p>
        <p className="text-2xl">
          As a hard-of-hearing person, I view the world differently. This has
          shaped how I think about design and technology: I believe that every
          user, no matter their ability, deserves to access and enjoy digital
          content with clarity and ease. That’s why I specialize in creating
          accessible, inclusive, and user-friendly websites, interfaces, and
          digital graphics.
        </p>
        <p className="text-2xl">
          I also run workshops and create content to empower Deaf youth to
          explore tech, design, and digital creativity. My goal is to break
          barriers, one pixel at a time — building a future where design doesn’t
          just look good, but feels right for everyone.
        </p>
        <div className="mt-15">
          <h2 className="text-lg font-bold underline  text-teal-500 ">
            {" "}
            A Few Things About Me
          </h2>
          <div className="flex mt-5 gap-10 p-1">
            <p className="borderBox">
              💪 I’m a hard-learning person – always learning, improving, and
              pushing my limits.
            </p>
            <p className="borderBox">
              🤝 I believe in clear, respectful communication, especially
              between designer and client.
            </p>
            <p className="borderBox">
              📲 Best way to contact me: via WhatsApp or Gmail – voice calls are
              challenging for me.
            </p>
            <p className="borderBox">
              🎯 I focus on building websites, user interfaces, design systems,
              and sign language-friendly visuals that make digital content
              better for all.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-25 gap-10">
        <div className="borderBox">
          <h2 className="text-lg text-center font-bold underline">
            How I Communicate With Customers
          </h2>
          <p className="pt-1">
            Clear and accessible communication is essential for a smooth project
            journey.
          </p>
          <p className="pt-3">
            Because I am a hard-learning person and hard of hearing, the best
            way to communicate with me is through written messages. This ensures
            I can fully understand your needs and respond with accurate,
            thoughtful solutions.
          </p>
        </div>
        {/* <div className="borderBox flex flex-col">
          [ Customer ] ➡️ Send a message via: 📱 WhatsApp or 📧 Gmail ➡️ [ I
          review your message ] ➡️ Reply with: - Clarifying questions -
          Suggested solutions - Timeline & pricing ➡️ [ You approve ] ➡️ Work
          begins (updates sent via text) ➡️ Project delivery & feedback
        </div> */}
      </div>
      <div className="mt-30">
        <h1  className=" text-4xl lg:text-5xl xl:text-3xl font-bold text-teal-500"
          p-1>🙏 My Request to You</h1>
        <p className="text-lg mt-5">I hope that you all understand my barrier and help by communicating in ways that support accessibility — just like I do when I design.</p>
        <p className="text-lg mt-5">You don’t need to change much. Just a simple message through text (email or WhatsApp) means a lot. I truly appreciate when people take the time to understand and collaborate respectfully.</p>
      </div>
    </section>
  );
}

export default About;
