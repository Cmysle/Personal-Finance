import bb_logo from "../../assets/bb_logo.png";
import navigating_debt_2 from "../../assets/navigating_debt_2.png";

const NavigatingDebt = () => {
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
              Navigating Debt: Strategies for Managing Financial Obligations
            </h1>
            <p className="text-lg text-white font-bold ml-11">By: John Doe</p>
          </div>
          {/* Row 1 Box 3 */}
          <div className="w-full h-full flex justify-center">
            <img
              src={navigating_debt_2}
              alt="navigating_debt_2"
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
              Debt is a reality for many individuals and families, but it
              doesn’t have to be a permanent burden. Understanding how to
              effectively manage and ultimately overcome debt can lead to
              financial freedom and peace of mind. This article explores
              practical strategies to navigate and conquer debt.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Understanding Your Debt
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              The first step in managing debt is understanding it. This involves
              knowing the total amount owed, interest rates, and repayment
              terms. Different types of debt – such as credit card debt, student
              loans, and mortgages – require different management strategies.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Expert Insight
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              "Knowing the details of your debt is empowering," says financial
              counselor Sarah Lee. "It’s the crucial first step towards
              developing a plan to tackle it."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Creating a Debt Repayment Plan
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              A debt repayment plan is a structured approach to paying off
              debts. Prioritize debts with higher interest rates, and consider
              the 'snowball' or 'avalanche' methods of debt repayment.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Snowball vs. Avalanche
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              - Snowball Method: Pay off smaller debts first for psychological
              wins. <br /> - Avalanche Method: Focus on debts with the highest
              interest rates first to save money over time.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Budgeting to Reduce Debt
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Budgeting plays a critical role in debt management. Allocate a
              portion of your income to debt repayment, and look for areas where
              you can cut expenses to free up more funds for debt reduction.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Budgeting Tip
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              "Trimming even small expenses can add up significantly over time,
              accelerating debt repayment," advises budgeting expert Mark
              Richards.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Negotiating with Creditors
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              You may be able to negotiate more favorable terms with your
              creditors, such as lower interest rates or extended repayment
              periods. Open communication with creditors can often lead to more
              manageable debt arrangements.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Considering Debt Consolidation
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Debt consolidation can simplify debt repayment by combining
              multiple debts into a single loan, often with a lower interest
              rate. However, it's important to carefully consider the terms and
              conditions of consolidation loans.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Financial Advisor Caution
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Financial advisor John Doe warns, "While consolidation can be
              helpful, it’s not a cure-all. It should be part of a broader
              financial strategy."
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              The Role of Emergency Funds
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              An emergency fund can prevent the accumulation of new debt in the
              event of unexpected expenses. Aim to build a fund that covers 3-6
              months of living expenses.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Seeking Professional Help
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              If debt becomes overwhelming, don't hesitate to seek help from a
              credit counselor or financial advisor. They can provide
              personalized advice and help you explore options like debt
              management programs.
            </p>
            <h2 className="text-3xl text-[#224768] font-bold pt-8">
              Conclusion
            </h2>
            <p className="text-lg text-[#5685a1] font-bold pt-2">
              Navigating debt requires a proactive approach and a
              well-thought-out plan. By understanding your debt, creating a
              repayment plan, budgeting effectively, negotiating with creditors,
              considering consolidation, building an emergency fund, and seeking
              professional advice, you can take control of your financial
              situation and work towards a debt-free life.
            </p>
          </div>
          <div className="w-full h-full"></div>
        </div>
      </section>
    </main>
  );
};

export default NavigatingDebt;
