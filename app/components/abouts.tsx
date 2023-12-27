import React from "react";

import Rice from "../assets/food1.png";

import Hien from "../assets/hien.png";
import { Link } from "@remix-run/react";

export default function Abouts() {
  return (
    <div className="lg:h-screen" id="about">
      <div className="lg:h-screen container mx-auto flex justify-between items-center">
        <div>
          <img width={1800} src={Rice} alt="..." />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-slate-700">ABOUT</h2>
          <img src={Hien} alt="..." className="mb-4" />
          <p className="max-w-7xl mb-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            soluta sint eius totam pariatur error debitis odit quod expedita ad,
            temporibus magnam minus amet nemo. Quis vitae praesentium incidunt
            et? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates soluta sint eius totam pariatur error debitis odit quod
            expedita ad, temporibus magnam minus amet nemo. Quis vitae
            praesentium incidunt et?
          </p>
          <Link
            to="/"
            className="p-3 px-5 rounded-full text-white bg-red-800 text-sm"
          >
            VIEW OUR MENU
          </Link>
        </div>
      </div>
    </div>
  );
}
