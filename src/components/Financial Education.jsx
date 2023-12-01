import { Link } from "react-router-dom";
import { useState } from "react";
import mastering_money_2 from "../assets/mastering_money.png";
import navigating_debt_2 from "../assets/navigating_debt.png";
import retirement_readiness_2 from "../assets/retirement_readiness.png";
import investing_101_2 from "../assets/investing_101.png";

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
            <div className="bg-[#9bc8db] border-r-2 border-r-[#5685a1] w-full h-full"></div>
            {/* Bottom Box */}
            <div className="bg-[#224768] rounded-bl-xl border-r-2 border-r-black border-l-4 border-l-[#5685a1] w-full h-full"></div>
          </div>
          {/* Row 2 Box 2 */}
          <div className="w-full h-full grid grid-rows-[8fr_1fr]">
            <div className="bg-[#9bc8db] border-r-2 border-r-[#5685a1] w-full h-full"></div>
            {/* Bottom Box */}
            <div className="bg-[#224768] border-r-2 border-r-black w-full h-full"></div>
          </div>
          {/* Row 2 Box 3 */}
          <div className="w-full h-full grid grid-rows-[8fr_1fr]">
            <div className="bg-[#9bc8db] border-r-2 border-r-[#5685a1] w-full h-full"></div>
            {/* Bottom Box */}
            <div className="bg-[#224768] border-r-2 border-r-black w-full h-full"></div>
          </div>
          {/* Row 2 Box 4 */}
          <div className="w-full h-full grid grid-rows-[8fr_1fr]">
            <div className="bg-[#9bc8db] w-full h-full"></div>
            {/* Bottom Box */}
            <div className="bg-[#224768] rounded-br-xl border-r-4 border-r-blue-950 w-full h-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinancialEducation;
