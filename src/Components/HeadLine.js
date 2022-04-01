import React from "react";

function HeadLine() {
  return (
    <div className="bg-no-repeat bg-hero-pattern h-[50rem] bg-[#F4F7FA] flex ">
      <div className=" w-2/3 h-full mx-auto flex flex-row justify-items-center items-center justify-center ">
        <div>
          {" "}
          {/** Location for Text */}
          <div className="text-[#f64b4b] my-5 font-mono font-bold">
            LET’S SHIFT YOUR BUSINESS
          </div>
          <div className="font-bold text-5xl w-[30rem] my-5">
            A Reason to shift your business.
          </div>
          <div className="text-xl w-96 my-5">
            With our wide range of unique digital marketing and web design
            solutions that will help your business grow.
          </div>
          <button className=" font-bold my-5 rounded-md bg-pink-600 p-4 text-white transition-all hover:-translate-y-3  ">
            Let's Start a Project
          </button>
        </div>

        <div className="relative w-[520px] h-auto">
          {" "}
          {/** Location for Image */}
          <img
            className="absolute  top-[1rem] left-16"
            alt="Decoration"
            src="https://reasonbeyond.com/wp-content/uploads/2020/08/agency-hero-dots.png"
          ></img>
          <img
            className="rounded-full z-[1] relative"
            alt="Image_Holder"
            src="https://i.pravatar.cc/1000?img=47"
          ></img>
          <img
            className="absolute top-[26rem] z-10 left-16"
            alt="Decoration"
            src="https://reasonbeyond.com/wp-content/uploads/2020/08/2-layers.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HeadLine;
