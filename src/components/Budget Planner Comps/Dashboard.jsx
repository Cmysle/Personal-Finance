/* eslint-disable react/prop-types */
import { useEffect } from "react";
import incomepng from "../../assets/income.png";
import expensepng from "../../assets/expense.png";

const Dashboard = ({
  filterType,
  recentTransactions,
  transactions,
  income,
  fetchIncome,
  fetchTransactions,
  filterTransactions,
}) => {
  const formatAmount = (amount) => {
    return `$${Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatDate = (dateString) => {
    dateString = dateString.toString();

    if (dateString.length === 7) {
      dateString = "0" + dateString;
    }

    if (dateString.length === 8) {
      return `${dateString.slice(0, 2)}/${dateString.slice(
        2,
        4
      )}/${dateString.slice(4)}`;
    } else {
      return dateString;
    }
  };

  const capitalize = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const calculateTotalIncome = (filter) => {
    if (filter == "ALL")
      return income.reduce((acc, income) => acc + parseFloat(income.Amount), 0);
    return filterTransactions(income, filterType).reduce(
      (acc, income) => acc + parseFloat(income.Amount),
      0
    );
  };

  const calculateTotalExpense = (filter) => {
    if (filter == "ALL")
      return transactions.reduce(
        (acc, income) => acc + parseFloat(income.Amount),
        0
      );
    return filterTransactions(transactions, filterType).reduce(
      (acc, income) => acc + parseFloat(income.Amount),
      0
    );
  };

  const calculateDailySpend = (filter) => {
    let oldestTransaction = transactions[transactions.length - 1];
    let filteredTransactions = filterTransactions(transactions, filter);
    let totalSpend = filteredTransactions.reduce(
      (acc, transaction) => acc + parseFloat(transaction.Amount),
      0
    );
    if (filter == "ALL") {
      totalSpend = transactions.reduce(
        (acc, transaction) => acc + parseFloat(transaction.Amount),
        0
      );
    }
    let daysCount;
    const today = new Date();
    switch (filter) {
      case "ALL": {
        if (oldestTransaction == undefined) break;
        today.setHours(0, 0, 0, 0);

        const dateStr = oldestTransaction.Date.toString().padStart(8, "0");
        const year = parseInt(dateStr.substring(4, 8), 10);
        const month = parseInt(dateStr.substring(0, 2), 10);
        const day = parseInt(dateStr.substring(2, 4), 10);
        const oldestDate = new Date(year, month - 1, day);

        const diffInMilliseconds = today - oldestDate;

        daysCount = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

        break;
      }
      case "MTD":
        daysCount = today.getDate();
        break;
      case "YTD":
        daysCount = (today.getMonth() + 1) * 30 + today.getDate();
        break;
      case "6MO":
        daysCount = 6 * 30;
        break;
      case "12MO":
        daysCount = 365;
        break;
    }

    return totalSpend / daysCount;
  };

  useEffect(() => {
    fetchTransactions();
    fetchIncome();
  }, [fetchTransactions, fetchIncome]);

  return (
    <main className="bg-[#9bc8db] w-full h-full rounded-r-xl grid grid-cols-[32px_1fr_32px]">
      <div className="w-full h-full"></div>
      <section className="w-full h-full grid grid-rows-[32px_1fr_32px_4.5fr_32px_2.5fr_32px]">
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[1fr_64px_1fr_64px_1fr]">
          {/* Row 1 Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
            <h1 className="text-white font-bold text-xl pl-4 border-b-2 border-b-[#224768]">
              Total Income ({filterType})
            </h1>
            <div className="bg-[#9bc8db] w-full h-full flex flex-row">
              <div className="w-3/4 h-full flex">
                <h3 className="w-full text-4xl text-[#224768] font-semibold text-center self-center">
                  {formatAmount(calculateTotalIncome(filterType))}
                </h3>
              </div>
              <div className="w-1/4 h-full flex justify-center">
                <img
                  className="h-14 self-center rounded-xl"
                  src={incomepng}
                  alt="Income Png"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 1 Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
            <h1 className="text-white font-bold text-xl pl-4 border-b-2 border-b-[#224768]">
              Total Expenses ({filterType})
            </h1>
            <div className="bg-[#9bc8db] w-full h-full flex flex-row">
              <div className="w-3/4 h-full flex">
                <h3 className="w-full text-4xl text-[#224768] font-semibold text-center self-center">
                  {formatAmount(calculateTotalExpense(filterType))}
                </h3>
              </div>
              <div className="w-1/4 h-full flex justify-center">
                <img
                  className="h-14 self-center rounded-xl"
                  src={expensepng}
                  alt="Expense Png"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 1 Box 3 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
            <h1 className="text-white font-bold text-xl pl-4 border-b-2 border-b-[#224768]">
              Average Daily Spend ({filterType})
            </h1>
            <div className="bg-[#9bc8db] w-full h-full flex flex-row">
              <div className="w-3/4 h-full flex">
                <h3 className="w-full text-4xl text-[#224768] font-semibold text-center self-center">
                  {formatAmount(calculateDailySpend(filterType, transactions))}
                </h3>
              </div>
              <div className="w-1/4 h-full flex justify-center">
                <img
                  className="h-14 self-center rounded-xl"
                  src={incomepng}
                  alt="Income Png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
        {/* Box 2 */}
        <div className="bg-[#5685a1] w-full h-full rounded-xl"></div>
        <div className="w-full h-full"></div>
        {/* Box 3 */}
        <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
          <h1 className="text-white font-bold text-3xl pl-8 mt-2 pb-2 border-b-2 border-b-[#224768]">
            Most Recent Transactions
          </h1>
          <div className="h-full rounded-b-xl">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.$id}
                className="bg-[#9bc8db] flex flex-row justify-between w-full h-1/5"
              >
                <p className="w-1/4 self-center text-[#224768] text-2xl font-semibold px-2 truncate">
                  {capitalize(transaction.Name)}
                </p>
                <p className="w-1/4 self-center text-[#224768] text-xl font-medium pr-2 truncate">
                  {capitalize(transaction.Category)}
                </p>
                <p className="w-1/4 self-center text-[#224768] text-xl font-medium">
                  {formatDate(transaction.Date)}
                </p>
                <p className="w-1/4 self-center text-[#224768] text-xl font-medium pr-2 truncate">
                  {formatAmount(transaction.Amount)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full"></div>
      </section>
      <div className="w-full h-full"></div>
    </main>
  );
};

export default Dashboard;
