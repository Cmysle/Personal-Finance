import { useState, useEffect, useCallback } from "react";
import Transactions from "./Budget Planner Comps/Transactions";
import Dashboard from "./Budget Planner Comps/Dashboard";
import Income from "./Budget Planner Comps/Income";
import PChart from "./Budget Planner Comps/PieChart";

const BudgetPlanner = () => {
  const [topPriciestTransactions, setTopPriciestTransactions] = useState([]);
  const [highestIncomePayments, setHighestIncomePayments] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [incomeCategoryTotals, setIncomeCategoryTotals] = useState([]);
  const [ExpenseCategoryTotals, setExpenseCategoryTotals] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [income, setIncome] = useState([]);
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState("");

  const COLORS = ["#84b3cf", "#5685a1", "#285773", "#002844"];

  function handleMenuClick() {
    if (menu === false) {
      setMenu(true);
    } else setMenu(false);
  }

  function handlePageClick(ClickedPage) {
    setPage(ClickedPage);
    handleMenuClick();
  }

  const fetchIncome = useCallback(() => {
    return fetch("http://localhost:3000/listUserIncome?CurrUser=test")
      .then((response) => response.json())
      .then((data) => {
        const sortedIncome = data.documents.sort((a, b) => {
          const dateAStr = a.Date.toString().padStart(8, "0");
          const dateBStr = b.Date.toString().padStart(8, "0");

          const yearA = parseInt(dateAStr.substring(4, 8), 10);
          const monthA = parseInt(dateAStr.substring(0, 2), 10);
          const dayA = parseInt(dateAStr.substring(2, 4), 10);

          const yearB = parseInt(dateBStr.substring(4, 8), 10);
          const monthB = parseInt(dateBStr.substring(0, 2), 10);
          const dayB = parseInt(dateBStr.substring(2, 4), 10);

          if (yearA !== yearB) return yearB - yearA;
          if (monthA !== monthB) return monthB - monthA;
          return dayB - dayA;
        });

        const sortedByAmount = [...data.documents].sort((a, b) => {
          return parseFloat(b.Amount) - parseFloat(a.Amount);
        });

        setIncome(sortedIncome);
        setHighestIncomePayments(sortedByAmount);
      })
      .catch((error) => {
        console.error("Error fetching income:", error);
      });
  }, []);

  const fetchTransactions = useCallback(() => {
    return fetch("http://localhost:3000/listUserTransactions?CurrUser=test")
      .then((response) => response.json())
      .then((data) => {
        const sortedTransactions = data.documents.sort((a, b) => {
          const dateAStr = a.Date.toString().padStart(8, "0");
          const dateBStr = b.Date.toString().padStart(8, "0");

          const yearA = parseInt(dateAStr.substring(4, 8), 10);
          const monthA = parseInt(dateAStr.substring(0, 2), 10);
          const dayA = parseInt(dateAStr.substring(2, 4), 10);

          const yearB = parseInt(dateBStr.substring(4, 8), 10);
          const monthB = parseInt(dateBStr.substring(0, 2), 10);
          const dayB = parseInt(dateBStr.substring(2, 4), 10);

          if (yearA !== yearB) return yearB - yearA;
          if (monthA !== monthB) return monthB - monthA;
          return dayB - dayA;
        });

        const sortedByAmount = [...data.documents]
          .sort((a, b) => {
            return parseFloat(b.Amount) - parseFloat(a.Amount);
          })
          .slice(0, 6);

        setTransactions(sortedTransactions);
        console.log(...transactions);
        setTopPriciestTransactions(sortedByAmount);
        setRecentTransactions(sortedTransactions.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterTransactions = (transactions, filterType) => {
    let startDate;

    switch (filterType) {
      case "YTD":
        startDate = new Date(new Date().getFullYear(), 0, 1);
        break;

      case "MTD":
        startDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        );
        break;

      case "6MO":
        startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 6);
        break;

      case "12MO":
        startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 12);
        break;
    }
    return transactions.filter((transaction) => {
      const dateStr = transaction.Date.toString().padStart(8, "0");
      const year = parseInt(dateStr.substring(4, 8), 10);
      const month = parseInt(dateStr.substring(0, 2), 10);
      const day = parseInt(dateStr.substring(2, 4), 10);
      const transactionDate = new Date(year, month - 1, day);
      return transactionDate >= startDate;
    });
  };

  const analyzeExpenses = useCallback(() => {
    let filteredTransactions = transactions;
    if (filterType !== "ALL") {
      filteredTransactions = filterTransactions(transactions, filterType);
    }
    const categoryMap = filteredTransactions.reduce((acc, transaction) => {
      const { Category, Amount } = transaction;
      acc[Category] = (acc[Category] || 0) + Amount;
      return acc;
    }, {});

    let categoriesSorted = Object.entries(categoryMap)
      .map(([name, total]) => ({
        name: name,
        value: total,
      }))
      .sort((a, b) => b.value - a.value);

    if (categoriesSorted.length > 3) {
      const otherTotal = categoriesSorted
        .slice(3)
        .reduce((sum, category) => sum + category.value, 0);
      categoriesSorted = categoriesSorted.slice(0, 3);
      categoriesSorted.push({ name: "Other", value: otherTotal });
    }

    setExpenseCategoryTotals(categoriesSorted);
  }, [filterType, transactions]);

  const analyzeIncome = useCallback(() => {
    let filteredTransactions = income;
    if (filterType !== "ALL") {
      filteredTransactions = filterTransactions(income, filterType);
    }
    const categoryMap = filteredTransactions.reduce((acc, transaction) => {
      const { Category, Amount } = transaction;
      acc[Category] = (acc[Category] || 0) + Amount;
      return acc;
    }, {});

    let categoriesSorted = Object.entries(categoryMap)
      .map(([name, total]) => ({
        name: name,
        value: total,
      }))
      .sort((a, b) => b.value - a.value);

    if (categoriesSorted.length > 3) {
      const otherTotal = categoriesSorted
        .slice(3)
        .reduce((sum, category) => sum + category.value, 0);
      categoriesSorted = categoriesSorted.slice(0, 3);
      categoriesSorted.push({ name: "Other", value: otherTotal });
    }

    setIncomeCategoryTotals(categoriesSorted);
  }, [filterType, income]);

  useEffect(() => {
    analyzeIncome();
    analyzeExpenses();
  }, [analyzeIncome, analyzeExpenses]);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchIncome(), fetchTransactions()]).then(() => {
      setLoading(false);
    });
  }, [fetchIncome, fetchTransactions]);

  if (loading)
    return (
      <div className="bg-[#d0e5ee] w-screen h-screen min-h-[1080px]">
        <div className="w-screen h-32"></div>
        <div className="width-screen-minus-128 height-screen-minus-192 mt-8 mx-16">
          <p className="w-full text-4xl text-center">Loading...</p>
        </div>
      </div>
    );

  return (
    <main className="bg-[#d0e5ee] w-screen h-screen min-h-[1080px]">
      <div className="w-screen h-32"></div>
      <section className="width-screen-minus-128 height-screen-minus-192 mt-8 mx-16 grid grid-cols-[1fr_32px_4.5fr]">
        <div className="w-full h-full grid grid-rows-[0.7fr_32px_1fr_32px_1fr]">
          {/* Left Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
            <h1 className="text-white font-bold text-xl pl-4 border-b-2 border-b-[#224768]">
              Filter By
            </h1>
            <div className="bg-[#9bc8db] w-full h-full flex flex-col">
              <div className="w-full h-fit pt-2 flex flex-row justify-around">
                <div className="w-1/3 self-center flex justify-center">
                  <h3
                    className={`${
                      filterType === "ALL"
                        ? "bg-[#9bc8db] text-[#224768]"
                        : "bg-[#224768] text-[#d0e5ee] hover:font-bold hover:text-white"
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-20 text-xl font-semibold text-center self-center`}
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
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-20 text-xl font-semibold text-center self-center`}
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
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-20 text-xl font-semibold text-center self-center`}
                    onClick={() => setFilterType("YTD")}
                  >
                    YTD
                  </h3>
                </div>
              </div>
              <div className="w-full h-fit pt-2 flex flex-row justify-around">
                <div className="w-1/3 self-center flex justify-center">
                  <h3
                    className={`${
                      filterType === "6MO"
                        ? "bg-[#9bc8db] text-[#224768]"
                        : "bg-[#224768] text-[#d0e5ee] hover:font-bold hover:text-white"
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-full text-xl font-semibold text-center self-center`}
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
                    } hover:cursor-pointer border-2 border-[#224768] rounded-lg w-full text-xl font-semibold text-center self-center`}
                    onClick={() => setFilterType("12MO")}
                  >
                    Past 12 Months
                  </h3>
                </div>
              </div>
              <div className="w-full h-fit pt-2 flex flex-row justify-around">
                <p className="bg-[#224768] text-[#d0e5ee] text-md px-2 rounded-lg">
                  Create Sample Transactions
                </p>
              </div>
              <div className="w-full h-fit pt-2 flex flex-row justify-around">
                <p className="bg-[#224768] text-[#d0e5ee] text-md px-2 rounded-lg">
                  Delete Sample Transactions
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Left Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
            <h1 className="text-white font-bold text-xl pl-4 border-b-2 border-b-[#224768]">
              Income By Category
            </h1>
            <div className="w-full h-full bg-[#9bc8db]">
              <div className="w-full h-3/4">
                <PChart data={incomeCategoryTotals} />
              </div>
              <div className="bg-[#9bc8db] w-full h-1/4 grid grid-cols-2">
                {incomeCategoryTotals.map((category, index) => (
                  <div
                    key={category.name}
                    className="w-full h-full flex flex-row items-center"
                  >
                    <div
                      className={`self-center w-4 h-4 ml-6 border-[1px] border-black`}
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    ></div>
                    <p className="w-fit h-fit self-center text-center ml-2 truncate">
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Left Box 3 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
            <h1 className="text-white font-bold text-xl pl-4 border-b-2 border-b-[#224768]">
              Expenses By Category
            </h1>
            <div className="w-full h-full bg-[#9bc8db]">
              <div className="w-full h-3/4">
                <PChart data={ExpenseCategoryTotals} />
              </div>
              <div className="bg-[#9bc8db] w-full h-1/4 grid grid-cols-2">
                {ExpenseCategoryTotals.map((category, index) => (
                  <div
                    key={category.name}
                    className="w-full h-full flex flex-row items-center"
                  >
                    <div
                      className={`self-center w-4 h-4 ml-6 border-[1px] border-black`}
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    ></div>
                    <p className="w-fit h-fit self-center text-center ml-2 truncate">
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
                        page === "expenses"
                          ? "bg-[#d0e5ee] text-[#224768]"
                          : "text-[#d0e5ee] hover:text-[#224768]"
                      } flex flex-row justify-start w-4/5 py-1 ml-2 mt-2 rounded-lg hover:cursor-pointer overflow-hidden`}
                      onClick={() => handlePageClick("expenses")}
                    >
                      <div className="self-center pl-2 font-bold whitespace-nowrap">
                        • Expenses
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-full">
            {page === "income" ? (
              <Income
                highestIncomePayments={highestIncomePayments}
                income={income}
                fetchIncome={fetchIncome}
                filterType={filterType}
                filterTransactions={filterTransactions}
              />
            ) : page === "expenses" ? (
              <Transactions
                topPriciestTransactions={topPriciestTransactions}
                transactions={transactions}
                fetchTransactions={fetchTransactions}
                filterType={filterType}
                filterTransactions={filterTransactions}
              />
            ) : (
              <Dashboard
                filterType={filterType}
                recentTransactions={recentTransactions}
                transactions={transactions}
                income={income}
                fetchTransactions={fetchTransactions}
                fetchIncome={fetchIncome}
                filterTransactions={filterTransactions}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BudgetPlanner;
