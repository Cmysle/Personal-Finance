import bb_logo_transparent from "../assets/bb_logo_transparent.png";
import acct_overview from "../assets/acct_overview.png";
import acct_overview_2 from "../assets/acct_overview_2.png";
import monthly_budget from "../assets/monthly_budget.png";
import investment_portfolio from "../assets/investment_portfolio.png";
import contact_us from "../assets/contact_us.png";
import commonly_asked_questions from "../assets/commonly_asked_questions.png";
import mastering_money from "../assets/mastering_money.png";
import navigating_debt from "../assets/navigating_debt.png";
import retirement_readiness from "../assets/retirement_readiness.png";
import investing_101 from "../assets/investing_101.png";
import financial_education from "../assets/financial_education.png";
import customers_served from "../assets/customers_served.png";

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
                  Placeholder for future most significant expenses of the
                  current month chart
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[2fr_32px_2fr_32px_4fr]">
          {/* Row 2 Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-cols-[1.5fr_1fr]">
            {/* Left Side */}
            <div className="w-full h-full">
              <div className="w-full h-4/5 flex justify-center">
                <div className="bg-black w-5/6 h-5/6 self-center flex justify-center">
                  <p className="self-center text-center text-white font-bold text-lg m-4">
                    Placeholder for future monthly budget chart
                  </p>
                </div>
              </div>
              <div className="w-full h-1/5 flex justify-center">
                <p className="self-center text-center text-white font-bold text-lg">
                  Monthly Budget
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div className="w-full h-full flex justify-center">
              <img
                src={monthly_budget}
                alt="monthly_budget"
                className="self-center h-40 p-2 rounded-3xl "
              />
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 2 Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1]">
            <div className="w-full h-full">
              <div className="w-full h-4/5 flex justify-center">
                <div className="bg-black w-5/6 h-5/6 self-center flex justify-center">
                  <p className="self-center text-center text-white font-bold text-lg m-4">
                    Placeholder for future Important Notifications chart
                  </p>
                </div>
              </div>
              <div className="w-full h-1/5 flex justify-center">
                <p className="self-center text-center text-white font-bold text-lg">
                  Important Notifications
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 2 Box 3 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-cols-[1fr_1fr_1fr]">
            {/* Left Side */}
            <div className="w-full h-full">
              <div className="w-full h-4/5 flex justify-center">
                <div className="bg-black w-5/6 h-5/6 self-center flex justify-center">
                  <p className="self-center text-center text-white font-bold text-lg m-4">
                    Placeholder for future total value chart
                  </p>
                </div>
              </div>
              <div className="w-full h-1/5 flex justify-center">
                <p className="self-center text-center text-white font-bold text-lg">
                  Total Value
                </p>
              </div>
            </div>
            {/* Middle Side */}
            <div className="w-full h-full flex flex-col items-center grid grid-rows-[4fr_1fr]">
              <div className="w-full h-full flex justify-center">
                <img
                  src={investment_portfolio}
                  alt="investment_portfolio"
                  className="self-center h-28 rounded-xl"
                />
              </div>
              <div className="w-full h-full flex justify-center">
                <p className="self-center text-center text-white font-bold text-2xl">
                  Investment Portfolio
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div className="w-full h-full">
              <div className="w-full h-4/5 flex justify-center">
                <div className="bg-black w-5/6 h-5/6 self-center flex justify-center">
                  <p className="self-center text-center text-white font-bold text-lg m-4">
                    Placeholder for future monthly budget chart
                  </p>
                </div>
              </div>
              <div className="w-full h-1/5 flex justify-center">
                <p className="self-center text-center text-white font-bold text-lg">
                  Highest Value(s)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full grid grid-cols-[2fr_32px_4fr_32px_1fr]">
          {/* Row 3 Box 1 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1.5fr]">
            <div className="w-full h-full grid grid-cols-[1fr_1fr] ">
              <div className="w-full h-full flex justify-center">
                <img
                  src={commonly_asked_questions}
                  alt="commonly_asked_questions"
                  className="self-center h-36 rounded-xl"
                />
              </div>
              <div className="w-full h-full border-l-2 border-l-[#9bc8db] border-dashed flex justify-center">
                <img
                  src={contact_us}
                  alt="contact_us"
                  className="self-center h-36 rounded-xl"
                />
              </div>
            </div>
            {/* White Box */}
            <div className="bg-white w-full h-full rounded-b-3xl grid grid-cols-[1fr_1fr]">
              <div className="w-full h-full flex justify-center">
                <p className="self-center text-center font-bold text-xl">
                  Commonly Asked <br /> Questions
                </p>
              </div>
              <div className="w-full h-full flex justify-center border-l-2 border-l-slate-400 border-dashed">
                <p className="self-center text-center font-bold text-xl">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 3 Box 2 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-y-2 border-[#5685a1] grid grid-cols-[4fr_1fr]">
            {/* Left Side */}
            <div className="w-full h-full grid grid-rows-[4fr_1.5fr]">
              <div className="w-full h-full grid grid-cols-[1fr_1fr_1fr_1fr]">
                <div className="w-full h-full flex flex-col items-center grid grid-rows-[4fr_1fr]">
                  <div className="w-full h-full flex justify-center">
                    <img
                      src={retirement_readiness}
                      alt="retirement_readiness"
                      className="self-center h-32 rounded-xl"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center">
                    <p className="self-center text-center text-white font-bold text-lg">
                      Retirement Readiness
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col items-center grid grid-rows-[4fr_1fr]">
                  <div className="w-full h-full flex justify-center">
                    <img
                      src={navigating_debt}
                      alt="navigating_debt"
                      className="self-center h-32 rounded-xl"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center">
                    <p className="self-center text-center text-white font-bold text-lg">
                      Navigating Debt
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col items-center grid grid-rows-[4fr_1fr]">
                  <div className="w-full h-full flex justify-center">
                    <img
                      src={investing_101}
                      alt="investing_101"
                      className="self-center h-32 rounded-xl"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center">
                    <p className="self-center text-center text-white font-bold text-lg">
                      Investing 101
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col items-center grid grid-rows-[4fr_1fr]">
                  <div className="w-full h-full flex justify-center">
                    <img
                      src={mastering_money}
                      alt="mastering_money"
                      className="self-center h-32 rounded-xl"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center">
                    <p className="self-center text-center text-white font-bold text-lg">
                      Mastering Money
                    </p>
                  </div>
                </div>
              </div>
              {/* White Box */}
              <div className="bg-white w-full h-full rounded-bl-3xl border-l-2 border-[#5685a1]">
                <div className="w-full h-full flex justify-center">
                  <h1 className="self-center text-center font-bold text-2xl">
                    Financial Education
                  </h1>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="w-full h-full grid grid-rows-[4fr_1.5fr]">
              <img src={financial_education} alt="financial_education" className="absolute h-52 mt-4 ml-6 rounded-xl"/>
              <div className="w-full h-full"></div>
              {/* White Box */}
              <div className="bg-white w-full h-full rounded-br-3xl border-r-2 border-[#5685a1]"></div>
            </div>
          </div>
          <div className="w-full h-full"></div>
          {/* Row 3 Box 3 */}
          <div className="bg-[#5685a1] w-full h-full rounded-3xl border-2 border-[#5685a1] grid grid-rows-[4fr_1.5fr]">
            <div className="w-full h-full flex justify-center">
              <img src={customers_served} alt="customers_served" className="self-center h-40 rounded-xl"/>
            </div>
            {/* White Box */}
            <div className="bg-white w-full h-full rounded-b-3xl flex flex-col">
              <div className="w-full h-1/2 text-center font-bold text-lg">Customers Served</div>
              <div className="w-full h-1/2 text-center text-xl">4,539</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
