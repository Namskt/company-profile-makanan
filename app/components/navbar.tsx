import { Link } from "@remix-run/react";
import React from "react";

const MenuNavbar = [
  {
    name: "HOME",
    to: "#",
  },
  {
    name: "ABOUT",
    to: "#about",
  },
  {
    name: "OUR MENU",
    to: "#ourmenu",
  },
  {
    name: "CONTACT",
    to: "#contact",
  },
  {
    name: "FOOTERS",
    to: "#footers",
  },
];

export default function Navbar() {
  return (
    <div className="fixed w-full bg-indigo-100 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div>
          <h1 className="text-5xl font-bold text-white francois">HEUBOWL</h1>
        </div>
        <ul className="flex justify-center items-center gap-10">
          {MenuNavbar.map((i, index) => (
            <li key={index}>
              <Link to={i.to} className="text-sm font-medium">
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link
            to="/"
            className="bg-red-800 p-3 px-5 rounded-md text-sm text-white"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}
