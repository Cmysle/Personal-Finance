import { useState } from "react";
import { useUser } from "../../utils/user";
import { v4 as uuidv4 } from "uuid";

const Transactions = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [recentTrans, setRecentTrans] = useState([]);

  const user = useUser();
  let totalTrans = recentTrans;

  function createTrans(name, category, amount) {
    totalTrans.push([name, category, "$" + amount]);
    setRecentTrans(totalTrans);
    setCategory("");
    setAmount("");
    setName("");
    console.log(totalTrans);
  }

  function handleCreateDoc(name, category, amount, date) {
    const DatabaseId = "65762a66918289095986";
    const CollectionId = "65762cfa3603f9971f6c";
    const DocumentId = uuidv4();
    user.createDoc(DatabaseId, CollectionId, DocumentId, {
      Name: name,
      Date: date,
      Category: category,
      Amount: amount,
      CurrUser: "TestUser1",
    });
  }

  return (
    <main className="bg-[#9bc8db] w-full h-full rounded-r-xl grid grid-cols-[32px_1fr_32px]">
      <div className="w-full h-full"></div>
      <section className="w-full h-full grid grid-rows-[32px_1.5fr_32px_4.5fr_32px_2fr_32px]">
        <div className="w-full h-full"></div>
        {/* Box 1 */}
        <form className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col">
          <div className="w-full h-1/2 flex justify-between pl-8 border-b-2 border-b-[#9bc8db] border-dashed">
            <h1 className="self-center text-5xl font-bold text-white">
              Log A Transaction
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
              <div className="self-center bg-[#d0e5ee] rounded-xl w-2/5 h-10 flex mr-20 mt-2">
                <div className="bg-white w-1/3 h-full rounded-xl flex justify-start">
                  <h2 className="self-center text-center text-2xl pl-3">
                    Date
                  </h2>
                </div>
                <input
                  type="text"
                  placeholder="MM/DD/YEAR"
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                  className="bg-[#d0e5ee] w-2/3 h-full rounded-xl text-xl pl-6"
                />
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
                Log Transaction
              </button>
            </div>
          </div>
        </form>
        <div className="w-full h-full"></div>
        {/* Box 2 */}
        <div className="bg-[#5685a1] w-full h-full rounded-xl flex flex-col border-2 border-[#5685a1] overflow-hidden">
          <h1 className="text-white font-bold text-3xl pl-8 mt-2 pb-2 border-b-2 border-b-[#9bc8db] border-dashed">
            Recent Transactions
          </h1>
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(22rem + 1px * 7)" }}
          >
            {" "}
            {/* Adjust maxHeight as needed */}
            {recentTrans.map((row, rowIndex) => (
              <ul key={rowIndex} className="bg-[#d0e5ee] w-full h-12 mt-1 flex">
                {row.map((item, itemIndex) => (
                  <li
                    key={`${rowIndex}-${itemIndex}`}
                    className="self-center ml-2 w-1/3 text-black text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="w-full h-full"></div>
        {/* Box 3 */}
        <div className="bg-[#5685a1] w-full h-full rounded-xl"></div>
        <div className="w-full h-full"></div>
      </section>
      <div className="w-full h-full"></div>
    </main>
  );
};

export default Transactions;
