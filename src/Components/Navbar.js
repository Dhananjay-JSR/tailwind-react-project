import React from "react";
import useScrollPosition from "./hooks/useScrollPosition";

function Navbar() {
  const scrollPosition = useScrollPosition();
  return (
    <>
    <div className={`h-20 bg-white flex transition-all px-9 flex-row justify-between ${(scrollPosition>=300)? `fixed w-screen -top-16 translate-y-16  z-50 ` : ``}`}>
      <a href="/" className="text-4xl h-fit py-4 font-semibold">
        Reason
      </a>

      <div className="p-6 font-bold  hidden sm:inline">
        <a href="/services" className="transition-all px-6 hover:text-cyan-500">

          Service
        </a>
        <a
          href="/portfolio"
          className="transition-all px-6 hover:text-cyan-500"
        >

          Portfolio
        </a>
        <a href="/about-us" className="transition-all px-6 hover:text-cyan-500">
          
          About Us
        </a>
        <a
          href="/contact-us"
          className="transition-all px-6 hover:text-cyan-500"
        >

          Contact Us
        </a>
        <a href="/opening" className="transition-all px-6 hover:text-cyan-500">

          Job Opening
        </a>
      </div>
      <button className=" font-bold my-2 rounded-md bg-pink-600 p-4 text-white transition-all hover:-translate-y-3 ">
        Let's Start a Project
      </button>
    </div>
    </>
  );
}

export default Navbar;
