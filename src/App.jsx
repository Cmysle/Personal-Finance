import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Navbar,
  FinancialEducation,
  MasteringMoney,
  Investing101,
  NavigatingDebt,
  RetirementReadiness,
  AboutUs,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
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
