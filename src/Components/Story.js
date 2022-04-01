import React from "react";

function Story() {
  return (
    <>
      <div className="pt-40 pb-24">
        <div className="w-[50rem] mx-auto flex">
          <div className="w-2/4 m-4">
            <div className="text-[#F64B4B] font-bold tracking-wide">
              OUR STORY
            </div>
            <div className="my-7 text-3xl font-bold w-[27rem] text-left">
              Our team knows exactly what your business needs and why it never
              succeeds.
            </div>
            <img
              className="mt-40 rounded-md"
              src="https://i.pravatar.cc/400?img=56"
            ></img>
          </div>

          <div className="w-2/4 max-w-xs m-4 pt-56">
            <div className="flex items-center relative mb-10">
              <img
                className="rounded-md  m-6 h-52"
                src="https://i.pravatar.cc/400?img=5"
              ></img>
              <img
                className="rounded-md m-6 h-32"
                src="https://i.pravatar.cc/400?img=12"
              ></img>
              <img
                className="absolute -top-6 left-40 z-10"
                src="https://reasonbeyond.com/wp-content/uploads/2020/08/story-shape.png"
              ></img>
            </div>
            <div className="m-8 text-xs font-sans font-light">
              The supreme function of Reason is to show man that some things are
              beyond reason. We are designers, developers, and strategist
              digital marketers, who handcraft websites and applications with
              end-to-end online marketing solutions.
            </div>
          </div>
        </div>
        <div className="pt-24 flex justify-center">
          <div className="p-5 mx-11 w-72 text-center">
            <div className="text-[#404040] text-6xl font-bold">1K+</div>
            <div className="pt-6">
              Customers visited Reason till now to get their service done.
            </div>
          </div>
          <div className="p-5 mx-11 w-72 text-center">
            <div className="text-[#404040] text-6xl font-bold">92%</div>
            <div className="pt-6">
              Thanks to our awesome customers, we have a high customer
              satisfaction rate.
            </div>
          </div>
          <div className="p-5 mx-11 w-72 text-center">
            <div className="text-[#404040] text-6xl font-bold">4.6/5.0</div>
            <div className="pt-6">
              Average customer ratings we have got all over internet.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
