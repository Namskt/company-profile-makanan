import React from "react";
import Food1 from "../assets/food1.png";
import { Link } from "@remix-run/react";
import Rice from "../assets/rice.png";

export default function Home() {
  return (
    <div className="lg:h-screen bg-blue-100 bg-opacity-75">
      <div className="lg:h-screen container mx-auto lg:flex justify-center items-center">
        <div className="">
          <img src={Rice} alt="..." width={700} className="opacity-75 mb-6" />
          <p className="mb-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            tempora laborum, voluptate adipisci neque pariatur soluta ipsa
            quidem quas ut ex alias, exercitationem optio, delectus mollitia
            sequi aliquid laboriosam repudiandae.
          </p>
          <Link
            to="/"
            className="p-3 px-5 rounded-full text-white bg-red-800 text-sm"
          >
            VIEW OUR MENU
          </Link>
        </div>
        <div>
          <img src={Food1} width={2000} alt="..." />
        </div>
      </div>
    </div>
  );
}
