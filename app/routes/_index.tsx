import type { MetaFunction } from "@remix-run/node";
import Abouts from "~/components/abouts";
import Home from "~/components/home";
import Navbar from "~/components/navbar";
import Ourmenu from "~/components/ourmenu";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Navbar />
      <Home />
      <Abouts />
      <Ourmenu />
    </div>
  );
}
