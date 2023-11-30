import bb_logo_transparent from "../assets/bb_logo_transparent.png";
import acct_overview from "../assets/acct_overview.png";
import acct_overview_2 from "../assets/acct_overview_2.png";
import saving_goals from "../assets/saving_goals.png";
import saving_goals_2 from "../assets/saving_goals_2.png";

const Home = () => {
  return (
    <main className="bg-[#d0e5ee] w-screen h-screen">
      <div className="w-screen h-32"></div>
      <section className="width-screen-minus-128 height-screen-minus-192 mt-8 mx-16 grid grid-rows-[5fr_32px_2fr_32px_3fr]">
        <div className="w-full h-full grid grid-cols-[5.5fr_32px_4.5fr]">
          {/* Row 1 Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl grid grid-cols-[2fr_3fr] border-2 border-[#5685a1]">
            {/* Left Side */}
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-[130px]"></div>
              <h1 className="absolute text-6xl font-bold mt-4 ml-4 text-white">
                Account Overview
              </h1>
              <p className="mt-1 ml-4 text-md text-white">
                Easily track your spending, savings, and investment performance,
                all in one convenient place.
              </p>
              <div className="w-full h-full flex">
                <img
                  src={acct_overview}
                  alt="acct_overview"
                  className="h-52 self-center rounded-xl ml-4"
                />
                <img
                  src={acct_overview_2}
                  alt="acct_overview_2"
                  className="h-52 self-center rounded-xl ml-4"
                />
              </div>
            </div>
            {/* Right Side */}
            <div className="w-full h-full grid grid-rows-[3.5fr_1.5fr]">
              <div className="w-full h-full grid grid-cols-[30px_1fr_30px]">
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-1/3"></div>
                  <div className="w-full h-2/3 border-l-2 border-l-[#9bc8db] border-dotted"></div>
                </div>
                <div className="w-full h-full flex justify-center ">
                  <img
                    src={bb_logo_transparent}
                    alt="bb_logo_transparent"
                    className="h-64 "
                  />
                </div>
                <div className="w-full h-full"></div>
              </div>
              {/* White Box */}
              <div className="bg-white w-full h-full rounded-br-3xl flex flex-col">
                <h1 className="text-2xl font-bold mt-2 ml-4">
                  Budget Overview
                </h1>
                <p className="text-md mt-1 ml-4 mr-2">
                  Gain insights into your spending with this concise budget
                  overview. Understand and manage your financial allocations
                  effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 1 Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl grid grid-rows-[3.5fr_1.5fr]  border-2 border-[#5685a1]">
            <div className="w-full h-full flex flex-col">
              <h1 className="absolute text-5xl font-bold mt-4 ml-4 text-white">
                Saving Goals
              </h1>
              <div className="bg-black w-5/6 h-5/6 m-auto flex justify-center">
                <p className="self-center text-center text-white font-bold text-2xl">
                  Placeholder for future D3.js bar chart
                </p>
              </div>
            </div>
            {/* White Box */}
            <div className="bg-white w-full h-full rounded-b-3xl grid grid-cols-[1fr_1fr]">
              <div>
                <h1 className="text-2xl font-bold mt-2 ml-4">Budget Planner</h1>
                <p className="text-md mt-1 ml-4 mr-2">
                  Gain insights into your spending with this concise budget
                  overview. Understand and manage your financial allocations
                  effectively.
                </p>
              </div>
              <div className="bg-black w-5/6 h-5/6 m-auto flex justify-center">
                <p className="self-center text-center text-white font-bold text-lg m-4">
                  Placeholder for future most significant expenses of the current month chart
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[2fr_32px_2fr_32px_4fr]">
          {/* Row 2 Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1]"></div>
          <div className="w-full h-full"></div>
          {/* Row 2 Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1]"></div>
          <div className="w-full h-full"></div>
          {/* Row 2 Box 3 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1]"></div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[2fr_32px_4fr_32px_1fr]">
          {/* Row 3 Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1fr]">
            <div className="w-full h-full"></div>
            {/* White Box */}
            <div className="bg-white w-full h-full rounded-b-3xl"></div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 3 Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1fr]">
            <div className="w-full h-full"></div>
            {/* White Box */}
            <div className="bg-white w-full h-full rounded-b-3xl"></div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 3 Box 3 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1fr]">
            <div className="w-full h-full"></div>
            {/* White Box */}
            <div className="bg-white w-full h-full rounded-b-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
