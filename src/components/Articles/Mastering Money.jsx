import bb_logo from "../../assets/bb_logo.png";
import mastering_money_2 from "../../assets/mastering_money_2.png";

const MasteringMoney = () => {
  return (
    <main className="bg-[#d0e5ee] w-screen h-fit">
      <div className="w-screen h-32"></div>
      <section className="width-screen-minus-384 h-fit pb-16 mt-8 mx-48 flex flex-col">
        <div className="bg-[#224768] w-full h-52 rounded-t-3xl grid grid-cols-[1fr_3.5fr_1.5fr]">
          {/* Row 1 Box 1 */}
          <div className="w-full h-full flex justify-center border-r-2 border-r-[#5685a1] border-dashed">
            <img
              src={bb_logo}
              alt="bb_logo_transparent"
              className="self-center h-44 rounded-xl"
            />
          </div>
          {/* Row 1 Box 2 */}
          <div className="w-full h-full flex flex-col justify-center border-r-2 border-r-[#5685a1] border-dashed">
            <h1 className="text-5xl ml-10 text-white font-bold">
              Mastering Money: Strategies for Financial Empowerment
            </h1>
            <p className="text-lg text-white font-bold ml-11">By: John Doe</p>
          </div>
          {/* Row 1 Box 3 */}
          <div className="w-full h-full flex justify-center">
            <img
              src={mastering_money_2}
              alt="mastering_money_2"
              className="self-center h-44 rounded-xl"
            />
          </div>
        </div>
        {/* Row 2 Box 1 */}
        <div className="bg-[#9bc8db] w-full min-h-[60vh] pb-16 rounded-b-3xl grid grid-cols-[1fr_3.5fr_1.5fr]">
          <div className="w-full h-full"></div>
          {/* Article */}
          <div className="w-full h-full px-11 pt-12">
            <h2 className="text-4xl text-[#224768] font-bold">Introduction</h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              In today's fast-paced world, mastering money management is a
              crucial skill. Whether you're just starting your financial journey
              or looking to refine your strategies, understanding the basics of
              personal finance is key. This article delves into essential money
              management techniques, offering advice to help you achieve
              financial success.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Creating a Budget
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              The foundation of sound financial management is a solid budget. A
              budget is a roadmap for your finances, enabling you to track
              income, expenses, and savings goals.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Expert Insight
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Financial coach Emily Johnson says, "A budget isn't about
              restricting what you spend. It's about understanding your spending
              and making money work for you."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Building an Emergency Fund
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              An emergency fund is vital for financial security. It's
              recommended to save at least three to six months' worth of living
              expenses to cover unexpected situations like medical emergencies
              or job loss.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Real-Life Example
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Mark Thompson, who faced a sudden job layoff, shares, "Having an
              emergency fund was a lifesaver. It gave me the financial buffer to
              find a new job without the stress of immediate expenses."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Understanding Credit and Debt
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Good credit management is essential for financial health. This
              includes understanding how credit scores work, using credit cards
              wisely, and managing debts effectively.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Tips for Managing Debt
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Debt should be approached strategically. High-interest debts, like
              credit card balances, should be prioritized. Consider
              consolidating debts or negotiating with lenders for better terms.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Investing for the Future
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Investing is a powerful tool for building wealth. Diversifying
              your investments across different asset classes can reduce risk
              and maximize returns.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Investment Strategies
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Financial advisor Robert Lee advises, "Start investing early, even
              if it's a small amount. Over time, compound interest works
              wonders."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Planning for Retirement
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Regardless of your age, it’s never too early or too late to start
              planning for retirement. Understand your retirement goals and the
              best vehicles for achieving them, such as IRAs and 401(k)s.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Financial Education
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Continuously educating yourself about personal finance is crucial.
              Stay informed about market trends, new investment opportunities,
              and changes in financial laws and regulations.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Conclusion
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Mastering money is a journey, not a destination. By creating a
              budget, building an emergency fund, managing credit and debt,
              investing wisely, planning for retirement, and continually
              educating yourself, you can achieve financial stability and
              success.
            </p>
          </div>
          <div className="w-full h-full"></div>
        </div>
      </section>
    </main>
  );
};

export default MasteringMoney;
