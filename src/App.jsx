import { Route, Routes } from "react-router-dom";
import { Home, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Home />
      </Routes>
    </>
  );
}

export default App;
