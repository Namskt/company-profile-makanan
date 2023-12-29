import React from "react";

import Rice from "../assets/food1.png";

export default function Ourmenu() {
  return (
    <div className="lg:h-screen bg-indigo-700 py-7 px-5 lg:px-0 lg:py-0">
      <div className="lg:h-screen flex flex-col justify-center items-center container mx-auto">
        <div className="lg:text-center mb-9">
          <h1 className="text-4xl 2xl:text-5xl text-white font-bold mb-3 2xl:mb-5">
            OUR MENU
          </h1>
          <p className="lg:max-w-lg text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas
            autem exercitationem ab! Soluta recusandae voluptate dignissimos
            est, quaerat, deleniti veritatis.
          </p>
        </div>
        <div className="lg:flex justify-between gap-5 items-center mt-4 2xl:mt-5 space-y-5 lg:space-y-0">
          <div className="text-center">
            <img width={300} src={Rice} alt="..." className="mb-3" />
            <h1 className="text-lg 2xl:text-xl font-semibold text-white mb-1 2xl:mb-2">
              YORU HEADING HERE
            </h1>
            <p className="text-2xl 2xl:text-4xl font-semibold text-white mb-1 2xl:mb-2">
              $ 24.00
            </p>
            <p className="text-md 2xl:text-lg font-medium text-white">
              Buy Now
            </p>
          </div>
          <div className="text-center">
            <img width={300} src={Rice} alt="..." className="mb-3" />
            <h1 className="text-lg 2xl:text-xl font-semibold text-white mb-1 2xl:mb-2">
              YORU HEADING HERE
            </h1>
            <p className="text-2xl 2xl:text-4xl font-semibold text-white mb-1 2xl:mb-2">
              $ 24.00
            </p>
            <p className="text-md 2xl:text-lg font-medium text-white">
              Buy Now
            </p>
          </div>
          <div className="text-center">
            <img width={300} src={Rice} alt="..." className="mb-3" />
            <h1 className="text-lg 2xl:text-xl font-semibold text-white mb-1 2xl:mb-2">
              YORU HEADING HERE
            </h1>
            <p className="text-2xl 2xl:text-4xl font-semibold text-white mb-1 2xl:mb-2">
              $ 24.00
            </p>
            <p className="text-md 2xl:text-lg font-medium text-white">
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
