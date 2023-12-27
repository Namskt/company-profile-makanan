import React from "react";

import Rice from "../assets/food1.png";

export default function Ourmenu() {
  return (
    <div className="lg:h-screen bg-indigo-700">
      <div className="lg:h-screen flex flex-col justify-center items-center container mx-auto">
        <div className="text-center mb-9">
          <h1 className="text-5xl text-white font-bold mb-5">OUR MENU</h1>
          <p className="max-w-lg text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas
            autem exercitationem ab! Soluta recusandae voluptate dignissimos
            est, quaerat, deleniti veritatis.
          </p>
        </div>
        <div className="flex justify-between gap-5 items-center mt-5">
          <div className="text-center">
            <img width={600} src={Rice} alt="..." className="mb-3" />
            <h1 className="text-xl font-semibold text-white mb-2">
              YORU HEADING HERE
            </h1>
            <p className="text-4xl font-semibold text-white mb-2">$ 24.00</p>
            <p className="text-lg font-medium text-white">Buy Now</p>
          </div>
          <div className="text-center">
            <img width={600} src={Rice} alt="..." className="mb-3" />
            <h1 className="text-xl font-semibold text-white mb-2">
              YORU HEADING HERE
            </h1>
            <p className="text-4xl font-semibold text-white mb-2">$ 24.00</p>
            <p className="text-lg font-medium text-white">Buy Now</p>
          </div>
          <div className="text-center">
            <img width={600} src={Rice} alt="..." className="mb-3" />
            <h1 className="text-xl font-semibold text-white mb-2">
              YORU HEADING HERE
            </h1>
            <p className="text-4xl font-semibold text-white mb-2">$ 24.00</p>
            <p className="text-lg font-medium text-white">Buy Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
