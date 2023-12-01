import bb_logo from "../../assets/bb_logo.png";
import investing_101_2 from "../../assets/investing_101_2.png";

const Investing101 = () => {
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
              Investing 101: A Beginner's Guide to Growing Your Wealth
            </h1>
            <p className="text-lg text-white font-bold ml-11">By: John Doe</p>
          </div>
          {/* Row 1 Box 3 */}
          <div className="w-full h-full flex justify-center">
            <img
              src={investing_101_2}
              alt="investing_101_2"
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
              Investing can be an effective way to grow your wealth over time,
              but it can seem daunting for beginners. Understanding the basics
              is crucial for making informed decisions. This beginner's guide to
              investing covers fundamental concepts and strategies to get you
              started on your investment journey.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Understanding Risk and Return
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Investing involves a balance between risk and return. Generally,
              higher risk investments offer the potential for higher returns,
              while lower risk investments tend to provide more stable, but
              often lower returns.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Expert Insight
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Investment advisor James Brown explains, "A fundamental rule of
              investing is that there's no reward without risk. It's about
              finding the right balance that aligns with your goals and risk
              tolerance."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Different Types of Investments
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              - Stocks: Shares in a company that offer a potential share in its
              profits.
              <br />- Bonds: Loans to a company or government, with fixed
              interest payments.
              <br />- Mutual Funds: Pooled funds from multiple investors used to
              buy a diversified portfolio of stocks, bonds, or other assets.
              <br />- Exchange-Traded Funds (ETFs): Similar to mutual funds, but
              traded like stocks on an exchange.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              The Importance of Diversification
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Diversification involves spreading your investments across various
              asset classes to reduce risk. A diversified portfolio can help
              protect against losses in any single investment.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Diversification Tip
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              "Don’t put all your eggs in one basket. Diversifying can help
              cushion against market fluctuations," advises financial planner
              Laura Peterson.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Starting with a Solid Investment Plan
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Develop a plan based on your financial goals, risk tolerance, and
              investment timeline. Consider factors like retirement, purchasing
              a home, or funding education.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Understanding Fees and Costs
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Be aware of fees associated with different investment products.
              High fees can significantly reduce your returns over time.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Fee Awareness
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              "Pay attention to the fees you’re paying. Even small percentages
              can add up," warns investment consultant Raj Singh.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              The Power of Compound Interest
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Compound interest can significantly grow your investments over
              time. The earlier you start investing, the more time your money
              has to compound.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Staying Informed and Continuing Education
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Stay informed about market trends and financial news. Continuous
              learning is key to becoming a more savvy investor.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Seeking Professional Advice
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Consider seeking advice from a financial advisor, especially when
              you're starting out. A professional can provide guidance tailored
              to your individual needs.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Conclusion
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Investing is a journey that can lead to financial growth and
              security. By understanding the basics, starting with a solid plan,
              diversifying your investments, being aware of fees, leveraging
              compound interest, staying informed, and seeking professional
              advice, you can navigate the world of investing with confidence.
            </p>
          </div>
          <div className="w-full h-full"></div>
        </div>
      </section>
    </main>
  );
};

export default Investing101;
