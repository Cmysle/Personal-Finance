import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="absolute w-screen h-32">
      <section className="bg-[#d0e5ee] w-screen h-16 grid grid-cols-2">
        <div className="w-full h-full ml-16 flex">
          <Link to="/" className="self-center">
            <h1 className="text-3xl font-bold">The Budget Buddy</h1>
          </Link>
        </div>
        <div className="flex flex-row w-full h-full">
          <div className="w-1/3"></div>
          <Link to="/about-us" className="flex-auto my-auto">
            <h2 className="text-xl text-[#224768] font-bold">About Us</h2>
          </Link>
          <div className="flex-auto my-auto">
            <div className="bg-[#5685a1] w-[2px] h-8 "></div>
          </div>
          <Link to="/how-it-works" className="flex-auto my-auto">
            <h2 className="text-xl text-[#224768] font-bold">How It Works</h2>
          </Link>
          <div className="flex-auto my-auto">
            <div className="bg-[#5685a1] w-[2px] h-8 "></div>
          </div>
          <Link to="/support" className="flex-auto my-auto">
            <h2 className="text-xl text-[#224768] font-bold">Support</h2>
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
            className="mt-auto bg-[#9bc8db] w-1/6 rounded-tl-lg border-r-2 border-r-[#5685a1]"
          >
            <h3 className="text-lg pt-1 h-10 text-white font-bold">Home</h3>
          </Link>
          <Link
            to="/account-overview"
            className="mt-auto bg-[#9bc8db] w-1/6 border-r-2 border-r-[#5685a1]"
          >
            <h3 className="text-lg pt-1 h-10 text-white font-bold">
              Account Overview
            </h3>
          </Link>
          <Link
            to="/budget-planner"
            className="mt-auto bg-[#9bc8db] w-1/6 border-r-2 border-r-[#5685a1]"
          >
            <h3 className="text-lg pt-1 h-10 text-white font-bold">
              Budget Planner
            </h3>
          </Link>
          <Link
            to="/saving-goals"
            className="mt-auto bg-[#9bc8db] w-1/6 border-r-2 border-r-[#5685a1]"
          >
            <h3 className="text-lg pt-1 h-10 text-white font-bold">
              Saving Goals
            </h3>
          </Link>
          <Link
            to="/investment-portfolio"
            className="mt-auto bg-[#9bc8db] w-1/6 border-r-2 border-r-[#5685a1]"
          >
            <h3 className="text-lg pt-1 h-10 text-white font-bold">
              Investment Portfolio
            </h3>
          </Link>
          <Link
            to="/financial-education"
            className="mt-auto bg-[#9bc8db] w-1/6 rounded-tr-lg"
          >
            <h3 className="text-lg pt-1 h-10 text-white font-bold">
              Financial Education
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
