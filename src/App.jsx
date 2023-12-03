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
  Register,
  Login,
} from "./components";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/register"
          element={
            <Register
              user={user}
              setUser={setUser}
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
              user={user}
              setUser={setUser}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
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
