import { Link } from "react-router-dom";
import { useState } from "react";
import mastering_money_2 from "../assets/mastering_money_2.png";
import navigating_debt_2 from "../assets/navigating_debt_2.png";
import retirement_readiness_2 from "../assets/retirement_readiness_2.png";
import investing_101_2 from "../assets/investing_101_2.png";

const FinancialEducation = () => {
  return (
    <main className="bg-[#d0e5ee] w-screen h-screen">
      <div className="w-screen h-32"></div>
      <section className="width-screen-minus-128 height-screen-minus-192 mt-8 mx-16 grid grid-rows-[1fr_32px_1.1fr]">
        <div className="w-full h-full grid grid-cols-[6fr_32px_1fr]">
          {/* Row 1 Box 1 */}
          <div className="bg-[#224768] rounded-tr-xl rounded-br-xl rounded-tl-sm rounded-bl-sm border-l-4 border-l-[#5685a1] w-full h-full"></div>
          <div className="w-full h-full"></div>
          {/* Row 1 Box 2 */}
          <div className="bg-[#224768] rounded-tl-xl rounded-bl-xl rounded-tr-sm rounded-br-sm border-r-4 border-r-blue-950 w-full h-full"></div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[1fr_1fr_1fr_1fr]">
          {/* Row 2 Box 1 */}
          <div className="w-full h-full grid grid-rows-[8fr_1fr]">
            <div className="bg-[#9bc8db] border-x-2 border-x-[#5685a1] w-full h-full flex flex-col">
              <h1 className="w-full text-3xl font-bold mt-4 ml-10">
                Retirement Readiness
              </h1>
              <div className="w-full h-full flex justify-center">
                <img
                  src={retirement_readiness_2}
                  alt="retirement_readiness_2"
                  className="self-center h-52 rounded-xl"
                />
              </div>
              <p className="ml-10 text-md mb-2">
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text{" "}
              </p>
            </div>
            {/* Bottom Box */}
            <Link to="/retirement-readiness">
              <div className="bg-[#224768] rounded-bl-xl border-r-2 border-r-black border-l-4 border-l-[#5685a1] w-full h-full flex justify-center">
                <h2 className="self-center text-xl font-bold text-[#9bc8db] hover:text-white">
                  Read Retirement Readyiness
                </h2>
              </div>
            </Link>
          </div>
          {/* Row 2 Box 2 */}
          <div className="w-full h-full grid grid-rows-[8fr_1fr]">
            <div className="bg-[#9bc8db] border-r-2 border-r-[#5685a1] w-full h-full flex flex-col">
              <h1 className="w-full text-3xl font-bold mt-4 ml-10">
                Investing 101
              </h1>
              <div className="w-full h-full flex justify-center">
                <img
                  src={investing_101_2}
                  alt="investing_101_2"
                  className="self-center h-52 rounded-xl"
                />
              </div>
              <p className="ml-10 text-md mb-2">
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text{" "}
              </p>
            </div>
            {/* Bottom Box */}
            <Link to="/investing-101">
              <div className="bg-[#224768] border-r-2 border-r-black w-full h-full flex justify-center">
                <h2 className="self-center text-xl font-bold text-[#9bc8db] hover:text-white">
                  Read Investing 101
                </h2>
              </div>
            </Link>
          </div>
          {/* Row 2 Box 3 */}
          <div className="w-full h-full grid grid-rows-[8fr_1fr]">
            <div className="bg-[#9bc8db] border-r-2 border-r-[#5685a1] w-full h-full flex flex-col">
              <h1 className="w-full text-3xl font-bold mt-4 ml-10">
                Navigating Debt
              </h1>
              <div className="w-full h-full flex justify-center">
                <img
                  src={navigating_debt_2}
                  alt="navigating_debt_2"
                  className="self-center h-52 rounded-xl"
                />
              </div>
              <p className="ml-10 text-md mb-2">
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text{" "}
              </p>
            </div>
            {/* Bottom Box */}
            <Link to="/navigating-debt">
              <div className="bg-[#224768] border-r-2 border-r-black w-full h-full flex justify-center">
                <h2 className="self-center text-xl font-bold text-[#9bc8db] hover:text-white">
                  Read Navigating Debt
                </h2>
              </div>
            </Link>
          </div>
          {/* Row 2 Box 4 */}
          <div className="w-full h-full grid grid-rows-[8fr_1fr]">
            <div className="bg-[#9bc8db] border-r-2 border-r-[#5685a1] w-full h-full flex flex-col">
              <h1 className="w-full text-3xl font-bold mt-4 ml-10">
                Mastering Money
              </h1>
              <div className="w-full h-full flex justify-center">
                <img
                  src={mastering_money_2}
                  alt="mastering_money_2"
                  className="self-center h-52 rounded-xl"
                />
              </div>
              <p className="ml-10 text-md mb-2">
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text FIller text FIller text
                FIller text FIller text FIller text{" "}
              </p>
            </div>
            {/* Bottom Box */}
            <Link to="/mastering-money">
              <div className="bg-[#224768] border-r-4 border-r-blue-950 rounded-br-xl w-full h-full flex justify-center">
                <h2 className="self-center text-xl font-bold text-[#9bc8db] hover:text-white">
                  Read Mastering Money
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinancialEducation;
