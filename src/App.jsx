import { Router, Route, Routes, Link } from "react-router-dom";
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
  Register,
  Login,
  BudgetPlanner,
  UnderConstruction,
} from "./components";
import { UserProvider } from "./utils/user";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  window.onload = function () {
    alert(
      "This Website Is Still Under Construction. Some pages may not work as intended just yet."
    );
  };

  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<UnderConstruction />} />
          <Route path="/support" element={<UnderConstruction />} />
          <Route element={<PrivateRoutes />}>
            <Route
              path="/register"
              element={
                <Register
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/account-overview" element={<UnderConstruction />} />
          <Route path="/budget-planner" element={<BudgetPlanner />} />
          <Route path="/saving-goals" element={<UnderConstruction />} />
          <Route path="/investment-portfolio" element={<UnderConstruction />} />
          <Route path="/financial-education" element={<FinancialEducation />} />
          <Route path="/mastering-money" element={<MasteringMoney />} />
          <Route path="/investing-101" element={<Investing101 />} />
          <Route path="/navigating-debt" element={<NavigatingDebt />} />
          <Route
            path="/retirement-readiness"
            element={<RetirementReadiness />}
          />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
