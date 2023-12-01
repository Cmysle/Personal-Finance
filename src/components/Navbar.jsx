import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <main className="absolute w-screen h-32">
      <section className="bg-[#d0e5ee] w-screen h-16 grid grid-cols-2">
        <div className="w-full h-full ml-16 flex">
          <Link
            to="/"
            className="self-center"
            onClick={() => {
              setActive("home");
            }}
          >
            <h1 className="text-3xl font-bold">The Budget Buddy</h1>
          </Link>
        </div>
        <div className="flex flex-row w-full h-full">
          <div className="w-1/3"></div>
          <Link
            to="/about-us"
            className="flex-auto my-auto"
            onClick={() => {
              setActive("about-us");
            }}
          >
            <h2
              className={`${
                active === "about-us" ? "text-white" : "text-[#224768]"
              } text-xl font-bold`}
            >
              About Us
            </h2>
          </Link>
          <div className="flex-auto my-auto">
            <div className="bg-[#5685a1] w-[2px] h-8 "></div>
          </div>
          <Link
            to="/how-it-works"
            className="flex-auto my-auto"
            onClick={() => {
              setActive("how-it-works");
            }}
          >
            <h2
              className={`${
                active === "how-it-works" ? "text-white" : "text-[#224768]"
              } text-xl font-bold`}
            >
              How It Works
            </h2>
          </Link>
          <div className="flex-auto my-auto">
            <div className="bg-[#5685a1] w-[2px] h-8 "></div>
          </div>
          <Link
            to="/support"
            className="flex-auto my-auto"
            onClick={() => {
              setActive("support");
            }}
          >
            <h2
              className={`${
                active === "support" ? "text-white" : "text-[#224768]"
              } text-xl font-bold`}
            >
              Support
            </h2>
          </Link>
          <div className="flex-auto my-auto">
            <h2 className="bg-[#224768] w-fit px-3 py-1 rounded-xl text-lg text-white">
              Log Out
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-[#5685a1] w-screen h-16 flex flex-row">
        <div className="w-1/3"></div>
        <div className="w-2/3 flex flex-row text-center mr-16">
          <Link
            to="/"
            className={`${
              active === "home" ? "bg-slate-200 text-black border-b-2 border-b-[#224768]" : "bg-[#9bc8db] text-white"
            } mt-auto w-1/6 rounded-tl-lg border-r-2 border-r-[#5685a1]`}
            onClick={() => {
              setActive("home");
            }}
          >
            <h3
              className="text-lg pt-1 h-10 font-bold"
            >
              Home
            </h3>
          </Link>
          <Link
            to="/account-overview"
            className={`${
              active === "account-overview" ? "bg-slate-200 text-black border-b-2 border-b-[#224768]" : "bg-[#9bc8db] text-white"
            } mt-auto w-1/6 border-r-2 border-r-[#5685a1]`}
            onClick={() => {
              setActive("account-overview");
            }}
          >
            <h3
              className="text-lg pt-1 h-10 font-bold"
            >
              Account Overview
            </h3>
          </Link>
          <Link
            to="/budget-planner"
            className={`${
              active === "budget-planner" ? "bg-slate-200 text-black border-b-2 border-b-[#224768]" : "bg-[#9bc8db] text-white"
            } mt-auto w-1/6 border-r-2 border-r-[#5685a1]`}
            onClick={() => {
              setActive("budget-planner");
            }}
          >
            <h3
              className="text-lg pt-1 h-10 font-bold"
            >
              Budget Planner
            </h3>
          </Link>
          <Link
            to="/saving-goals"
            className={`${
              active === "saving-goals" ? "bg-slate-200 text-black border-b-2 border-b-[#224768]" : "bg-[#9bc8db] text-white"
            } mt-auto w-1/6 border-r-2 border-r-[#5685a1]`}
            onClick={() => {
              setActive("saving-goals");
            }}
          >
            <h3
              className="text-lg pt-1 h-10 font-bold"
            >
              Saving Goals
            </h3>
          </Link>
          <Link
            to="/investment-portfolio"
            className={`${
              active === "investment-portfolio" ? "bg-slate-200 text-black border-b-2 border-b-[#224768]" : "bg-[#9bc8db] text-white"
            } mt-auto w-1/6 border-r-2 border-r-[#5685a1]`}
            onClick={() => {
              setActive("investment-portfolio");
            }}
          >
            <h3
              className="text-lg pt-1 h-10 font-bold"
            >
              Investment Portfolio
            </h3>
          </Link>
          <Link
            to="/financial-education"
            className={`${
              active === "financial-education" ? "bg-slate-200 text-black border-b-2 border-b-[#224768]" : "bg-[#9bc8db] text-white"
            } mt-auto w-1/6 rounded-tr-lg`}
            onClick={() => {
              setActive("financial-education");
            }}
          >
            <h3
              className="text-lg pt-1 h-10 font-bold"
            >
              Financial Education
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
