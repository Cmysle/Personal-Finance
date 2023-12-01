import { Route, Routes } from "react-router-dom";
import { Home, Navbar, FinancialEducation, MasteringMoney, Investing101, NavigatingDebt, RetirementReadiness } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/financial-education" element={<FinancialEducation />} />
      <Route path="/mastering-money" element={<MasteringMoney />} />
      <Route path="/investing-101" element={<Investing101 />} />
      <Route path="/navigating-debt" element={<NavigatingDebt />} />
      <Route path="/retirement-readiness" element={<RetirementReadiness />} />
      </Routes>
    </>
  );
}

export default App;
