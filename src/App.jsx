import { Route, Routes } from "react-router-dom";
import { Home, Navbar, FinancialEducation } from "./components";

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
      </Routes>
    </>
  );
}

export default App;
