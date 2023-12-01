import bb_logo from "../../assets/bb_logo.png";
import retirement_readiness_2 from "../../assets/retirement_readiness_2.png";

const RetirementReadiness = () => {
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
              Retirement Readiness: Are You on Track for Your Golden Years?
            </h1>
            <p className="text-lg text-white font-bold ml-11">By: John Doe</p>
          </div>
          {/* Row 1 Box 3 */}
          <div className="w-full h-full flex justify-center">
            <img
              src={retirement_readiness_2}
              alt="retirement_readiness_2"
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
              As we navigate through our careers and busy lives, retirement
              often seems like a distant milestone. However, the reality is that
              the earlier we start planning for our golden years, the more
              secure and enjoyable they can be. Retirement readiness is not just
              about saving money; it's about strategic planning, understanding
              your needs, and making informed decisions.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Understanding Retirement Needs
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              The first step towards retirement readiness is understanding what
              retirement means to you. Does it involve traveling the world,
              pursuing hobbies, or simply relaxing at home? Different retirement
              goals require different levels of financial security. It's
              essential to estimate your retirement expenses, considering
              factors like healthcare, housing, leisure activities, and
              inflation.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Expert Opinion
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              According to financial planner Jane Doe, "Retirement planning is
              not a one-size-fits-all approach. Each individual's retirement
              dream requires a unique financial strategy."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Building Your Retirement Savings
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              The cornerstone of retirement readiness is your savings. The
              sooner you start saving, the more your money can grow due to
              compounding interest. Diversifying your investments in stocks,
              bonds, and real estate can also help balance risk and return.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Case Study
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              John and Mary Smith started saving 10% of their income in their
              30s. By their 60s, they had accumulated a substantial nest egg,
              thanks to early investments and compound interest.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Navigating Retirement Accounts
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Understanding different retirement accounts is crucial.
              Traditional IRAs, Roth IRAs, and 401(k)s each have their benefits
              and limitations. It's important to know the tax implications and
              withdrawal rules of these accounts.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Tax Implications
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Financial advisor John Public states, "Choosing the right
              retirement account can significantly impact your tax liabilities
              in retirement. It's important to consider both current and future
              tax situations."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Planning for Healthcare
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Healthcare is a significant retirement expense. Investing in a
              health savings account (HSA) and understanding Medicare can help
              mitigate these costs.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Conclusion
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Retirement readiness is about preparation, understanding your
              needs, and making informed financial decisions. By starting early,
              being aware of your financial options, and planning for
              healthcare, you can ensure a comfortable and fulfilling
              retirement.
            </p>
          </div>
          <div className="w-full h-full"></div>
        </div>
      </section>
    </main>
  );
};

export default RetirementReadiness;
