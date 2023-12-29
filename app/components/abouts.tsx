import React from "react";

import Rice from "../assets/food1.png";

import Hien from "../assets/hien.png";
import { Link } from "@remix-run/react";

export default function Abouts() {
  return (
    <div className="lg:h-screen px-5 lg:px-0" id="about">
      <div className="lg:h-screen container mx-auto lg:flex justify-center gap-5 items-center">
        <div className="hidden lg:flex">
          <img width={500} src={Rice} alt="..." />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-slate-700">ABOUT</h2>
          <img
            src={Hien}
            alt="..."
            width={900}
            className="mb-4 opacity-75 w-72 lg:w-[30rem]"
          />
          <p className="max-w-lg mb-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            soluta sint eius totam pariatur error debitis odit quod expedita ad,
            temporibus magnam minus amet nemo. Quis vitae praesentium incidunt
            et? Lorem ipsum dolor
          </p>
          <Link
            to="/"
            className="p-3 px-5 rounded-full text-white bg-red-800 text-sm"
          >
            VIEW OUR MENU
          </Link>
        </div>
        <div className="flex lg:hidden">
          <img width={500} src={Rice} alt="..." />
        </div>
      </div>
    </div>
  );
}
