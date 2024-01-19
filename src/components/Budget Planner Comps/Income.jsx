/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useUser } from "../../utils/user";
import { v4 as uuidv4 } from "uuid";

const Income = ({ highestIncomePayments, income, fetchIncome }) => {
  const [dateError, setDateError] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const user = useUser();
  const DatabaseId = "65762a66918289095986";
  const CollectionId = "65a947f6209906d314ec";
  const DocumentId = uuidv4();

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

  const isValidMonth = (month) => month >= 1 && month <= 12;

  const isValidDay = (day, month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= daysInMonth;
  };

  const isFutureDate = (day, month, year) => {
    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return inputDate > currentDate;
  };

  const validateDate = (date) => {
    const parts = date.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[2], 10);
    return (
      isValidMonth(month) &&
      isValidDay(day, month, year) &&
      !isFutureDate(day, month, year)
    );
  };

  const handleDateChange = (event) => {
    let value = event.target.value;
    const cleanedValue = value.replace(/[^0-9]/g, "");

    if (cleanedValue.length > 4) {
      value = `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(
        2,
        4
      )}/${cleanedValue.slice(4, 8)}`;
    } else if (cleanedValue.length > 2) {
      value = `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}`;
    } else {
      value = cleanedValue;
    }
    setDate(value);
    setDateError("");
  };

  function handleCreateDoc(name, category, amount, dateString) {
    const formattedDate = dateString.replace(/\//g, "");

    if (!validateDate(dateString)) {
      setDateError("Date is invalid");
      return;
    }
    setDateError("");

    user
      .createDoc(DatabaseId, CollectionId, DocumentId, {
        Name: name,
        Date: formattedDate,
        Category: category,
        Amount: amount,
        CurrUser: "test",
      })
      .then(() => {
        fetchIncome();
      })
      .catch((error) => {
        console.error("Error creating income:", error);
      });

    setCategory("");
    setDate("");
    setAmount("");
    setName("");
  }

  function deleteIncome(documentId) {
    fetch(`http://localhost:3000/deleteUserIncome/${documentId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        fetchIncome();
      })
      .catch((error) => {
        console.error("Error deleting income:", error);
      });
  }

  useEffect(() => {
    fetchIncome();
  }, [fetchIncome]);

  return (
    <main className="bg-[#9bc8db] w-full h-full rounded-r-xl grid grid-cols-[32px_1fr_32px]">
      <div className="w-full h-full"></div>
      <section className="w-full h-full grid grid-rows-[32px_1.5fr_32px_4.5fr_32px_2fr_32px]">
        <div className="w-full h-full"></div>
        {/* Box 1 */}
        <form className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col">
          <div className="w-full h-1/2 flex justify-between pl-8 border-b-2 border-b-[#9bc8db] border-dashed">
            <h1 className="self-center text-5xl font-bold text-white">
              Log Your Income
            </h1>
            <div className="w-3/5 flex justify-between ">
              <div className="self-center bg-[#d0e5ee] rounded-xl w-3/5 h-10 flex mr-20 mt-2">
                <div className="bg-white w-1/3 h-full rounded-xl flex justify-start">
                  <h2 className="self-center text-center text-2xl pl-6">
                    Name
                  </h2>
                </div>
                <input
                  type="text"
                  placeholder="Type Here"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="bg-[#d0e5ee] w-2/3 h-full rounded-xl text-2xl pl-6"
                />
              </div>
              <div className="self-center bg-[#d0e5ee] rounded-xl w-2/5 h-10 flex mr-20 mt-2 relative">
                <div className="bg-white w-1/3 h-full rounded-xl flex justify-start">
                  <h2 className="self-center text-center text-2xl pl-3">
                    Date
                  </h2>
                </div>
                <input
                  type="text"
                  placeholder="MM/DD/YEAR"
                  value={date}
                  onChange={handleDateChange}
                  className="bg-[#d0e5ee] w-2/3 h-full rounded-xl text-xl pl-6"
                />
                {dateError && (
                  <div className="bg-red-200 rounded-t-xl w-3/5 text-center absolute bottom-full left-1/3 text-red-600">
                    {dateError}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" w-full h-1/2 flex justify-around">
            <div className="self-center bg-[#d0e5ee] rounded-xl w-4/12 h-10 flex">
              <div className="bg-white w-2/5 h-full rounded-xl flex justify-start">
                <h2 className="self-center text-center text-2xl pl-6">
                  Category
                </h2>
              </div>
              <input
                type="text"
                placeholder="Type Here"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                className="bg-[#d0e5ee] w-3/5 h-full rounded-xl text-2xl pl-6"
              />
            </div>
            <div className="self-center bg-[#d0e5ee] rounded-xl w-4/12 h-10 flex">
              <div className="bg-white w-2/5 h-full rounded-xl flex justify-start">
                <h2 className="self-center text-center text-2xl pl-6">
                  Amount
                </h2>
              </div>
              <input
                type="number"
                placeholder="Type Here"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
                className="bg-[#d0e5ee] w-3/5 h-full rounded-xl text-2xl pl-6"
              />
            </div>
            <div className="w-3/12 flex justify-center">
              <button
                className="w-full text-center h-10 self-center rounded-full bg-white hover:bg-[#d0e5ee] text-3xl font-bold text-[#5685a1] hover:text-[#224768]"
                type="button"
                onClick={() => handleCreateDoc(name, category, amount, date)}
              >
                Log Income
              </button>
            </div>
          </div>
        </form>
        <div className="w-full h-full"></div>
        {/* Box 2 */}
        <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
          <h1 className="text-white font-bold text-3xl pl-8 mt-2 pb-2 border-b-2 border-b-[#224768]">
            All Income
          </h1>
          <div
            className="overflow-y-auto rounded-b-xl"
            style={{ maxHeight: "calc(22rem + 2.5px * 7)" }}
          >
            {income.map((income) => (
              <div
                key={income.$id}
                className="bg-[#9bc8db] flex flex-row w-full h-14"
              >
                <p className="w-1/4 self-center text-[#224768] text-2xl font-semibold px-2 truncate">
                  {capitalize(income.Name)}
                </p>
                <p className="w-1/4 self-center text-[#224768] text-xl font-medium pr-2 truncate">
                  {capitalize(income.Category)}
                </p>
                <p className="w-1/4 self-center text-[#224768] text-xl font-medium">
                  {formatDate(income.Date)}
                </p>
                <p className="w-1/6 self-center text-[#224768] text-xl font-medium pr-2 truncate">
                  {formatAmount(income.Amount)}
                </p>
                <div className="w-1/12 h-full flex justify-center items-center">
                  <button
                    onClick={() => deleteIncome(income.$id)}
                    className="bg-[#224768] hover:font-bold text-white text-lg rounded-xl w-fit h-fit px-2 py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full"></div>
        {/* Box 3 */}
        <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
          <h1 className="text-white font-bold text-3xl pl-8 mt-2 pb-2 border-b-2 border-b-[#224768]">
            Highest Income Payments
          </h1>
          <div className="h-full rounded-b-xl grid grid-cols-2">
            {highestIncomePayments.map((income) => (
              <div
                key={income.$id}
                className="bg-[#9bc8db] flex flex-row w-full h-[99%]"
              >
                <p className="w-1/3 self-center text-[#224768] text-2xl font-semibold px-2 truncate">
                  {capitalize(income.Name)}
                </p>
                <p className="w-1/3 self-center text-[#224768] text-xl font-medium">
                  {formatDate(income.Date)}
                </p>
                <p className="w-1/3 self-center text-[#224768] text-xl font-medium pr-2 truncate">
                  {formatAmount(income.Amount)}
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

export default Income;
