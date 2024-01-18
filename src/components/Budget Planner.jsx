import Transactions from "./Budget Planner Comps/Transactions";
import Dashboard from "./Budget Planner Comps/Dashboard";
import Income from "./Budget Planner Comps/Income";
import { useState } from "react";

const BudgetPlanner = () => {
  const [filterType, setFilterType] = useState("ALL");
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState("");

  function handleMenuClick() {
    if (menu === false) {
      setMenu(true);
    } else setMenu(false);
  }

  function handlePageClick(ClickedPage) {
    setPage(ClickedPage);
    handleMenuClick();
  }

  return (
    <main className="bg-[#d0e5ee] w-screen h-screen min-h-[1080px]">
      <div className="w-screen h-32"></div>
      <section className="width-screen-minus-128 height-screen-minus-192 mt-8 mx-16 grid grid-cols-[1fr_32px_4.5fr]">
        <div className="w-full h-full grid grid-rows-[1fr_32px_1fr_32px_1fr]">
          <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
            <h1 className="text-white font-bold text-xl pl-4 border-b-2 border-b-[#224768]">
              Filter By
            </h1>
            <div className="bg-[#9bc8db] w-full h-full flex flex-col">
              <div className="w-full h-1/4 flex flex-row justify-around">
                <div className="w-1/3 self-center flex justify-center">
                  <h3
                    className={`${
                      filterType === "ALL"
                        ? "bg-[#9bc8db] text-[#224768]"
                        : "bg-[#224768] text-[#d0e5ee] hover:font-bold hover:text-white"
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-20 text-2xl font-semibold text-center self-center`}
                    onClick={() => setFilterType("ALL")}
                  >
                    All
                  </h3>
                </div>
                <div className="w-1/3 self-center flex justify-center">
                  <h3
                    className={`${
                      filterType === "MTD"
                        ? "bg-[#9bc8db] text-[#224768]"
                        : "bg-[#224768] text-[#d0e5ee] hover:font-bold hover:text-white"
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-20 text-2xl font-semibold text-center self-center`}
                    onClick={() => setFilterType("MTD")}
                  >
                    MTD
                  </h3>
                </div>
                <div className="w-1/3 self-center flex justify-center">
                  <h3
                    className={`${
                      filterType === "YTD"
                        ? "bg-[#9bc8db] text-[#224768]"
                        : "bg-[#224768] text-[#d0e5ee] hover:font-bold hover:text-white"
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-20 text-2xl font-semibold text-center self-center`}
                    onClick={() => setFilterType("YTD")}
                  >
                    YTD
                  </h3>
                </div>
              </div>
              <div className="w-full h-1/4 flex flex-row justify-around">
                <div className="w-1/3 self-center flex justify-center">
                  <h3
                    className={`${
                      filterType === "6MO"
                        ? "bg-[#9bc8db] text-[#224768]"
                        : "bg-[#224768] text-[#d0e5ee] hover:font-bold hover:text-white"
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-full text-2xl font-semibold text-center self-center`}
                    onClick={() => setFilterType("6MO")}
                  >
                    Past 6 Months
                  </h3>
                </div>
                <div className="w-1/3 self-center flex justify-center">
                  <h3
                    className={`${
                      filterType === "12MO"
                        ? "bg-[#9bc8db] text-[#224768]"
                        : "bg-[#224768] text-[#d0e5ee] hover:font-bold hover:text-white"
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-full text-2xl font-semibold text-center self-center`}
                    onClick={() => setFilterType("12MO")}
                  >
                    Past 12 Months
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          <div className="bg-[#9bc8db] text-center text-2xl w-full h-full rounded-xl">
            Income By Category Pie Chart
          </div>
          <div className="w-full h-full"></div>
          <div className="bg-[#9bc8db] text-center text-2xl w-full h-full rounded-xl">
            Expenses By Category Pie Chart
          </div>
        </div>
        <div className="w-full h-full"></div>
        <div
          className={`w-full h-full grid transition-all duration-300 ease-in-out ${
            menu === false ? "grid-cols-[0.22fr_7fr]" : "grid-cols-[1fr_7fr]"
          }`}
        >
          <div className="bg-[#5685a1] w-full h-full overflow-hidden rounded-l-xl">
            <div className={`w-full flex justify-center mb-4`}>
              {menu === false ? (
                <div
                  className="hover:cursor-pointer mt-4"
                  onClick={() => handleMenuClick()}
                >
                  <div className="bg-white w-7 h-1 rounded-full"></div>
                  <div className="bg-white w-7 h-1 rounded-full mt-1"></div>
                  <div className="bg-white w-7 h-1 rounded-full mt-1"></div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="w-full flex justify-end">
                    <div
                      className="w-fit flex flex-row mt-[12px] mr-2 hover:cursor-pointer"
                      onClick={() => handleMenuClick()}
                    >
                      <div className="self-center border-t-[12px] border-t-transparent border-r-[18px] border-r-white border-b-[12px] border-b-transparent"></div>
                      <div className="self-center ml-1 bg-white w-1 h-[24px] rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="pt-4"></div>
                    <div
                      className={` ${
                        page === ""
                          ? "bg-[#d0e5ee] text-[#224768]"
                          : "text-[#d0e5ee] hover:text-[#224768]"
                      }   flex flex-row justify-start w-4/5 py-1 ml-2 rounded-lg hover:cursor-pointer overflow-hidden`}
                      onClick={() => handlePageClick("")}
                    >
                      <div className="self-center pl-2 font-bold whitespace-nowrap">
                        • Dashboard
                      </div>
                    </div>
                    <div
                      className={` ${
                        page === "income"
                          ? "bg-[#d0e5ee] text-[#224768]"
                          : "text-[#d0e5ee] hover:text-[#224768]"
                      } flex flex-row justify-start w-4/5 py-1 ml-2 mt-2 rounded-lg hover:cursor-pointer overflow-hidden`}
                      onClick={() => handlePageClick("income")}
                    >
                      <div className="self-center pl-2 font-bold whitespace-nowrap">
                        • Income
                      </div>
                    </div>
                    <div
                      className={` ${
                        page === "transactions"
                          ? "bg-[#d0e5ee] text-[#224768]"
                          : "text-[#d0e5ee] hover:text-[#224768]"
                      } flex flex-row justify-start w-4/5 py-1 ml-2 mt-2 rounded-lg hover:cursor-pointer overflow-hidden`}
                      onClick={() => handlePageClick("transactions")}
                    >
                      <div className="self-center pl-2 font-bold whitespace-nowrap">
                        • Transactions
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-full">
            {page === "income" ? (
              <Income />
            ) : page === "transactions" ? (
              <Transactions />
            ) : (
              <Dashboard
                filterType={filterType}
                setFilterType={setFilterType}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BudgetPlanner;
