import { useState, useEffect } from "react";
import { useUser } from "../../utils/user";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    fetch("http://localhost:3000/listUserTransactions?CurrUser=test")
      .then((response) => response.json())
      .then((data) => {
        const sortedTransactions = data.documents
          .sort((a, b) => {
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
          })
          .slice(0, 4);

        setTransactions(sortedTransactions);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  };

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

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <main className="bg-[#9bc8db] w-full h-full rounded-r-xl grid grid-cols-[32px_1fr_32px]">
      <div className="w-full h-full"></div>
      <section className="w-full h-full grid grid-rows-[32px_1fr_32px_4.5fr_32px_2.5fr_32px]">
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[1fr_64px_1fr_64px_1fr]">
          {/* Row 1 Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl"></div>
          <div className="w-full h-full"></div>
          {/* Row 1 Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl"></div>
          <div className="w-full h-full"></div>
          {/* Row 1 Box 3 */}
          <div className="bg-[#5685a1] w-full h-full rounded-xl"></div>
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
            {transactions.map((transaction) => (
              <div
                key={transaction.$id}
                className="bg-[#9bc8db] flex flex-row w-full h-1/4"
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
