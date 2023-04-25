import Admin from "./componets/Admin";
import Check from "./componets/Check";
import Home from "./componets/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Howitworks from "./componets/Howitworks";
import AboutUs from "./componets/AboutUs";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Admin" exact element={<Admin />} />
          <Route path="/Check" exact element={<Check />} />
          <Route path="/How It Works" exact element={<Howitworks />} />
          <Route path="/About Us" exact element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
