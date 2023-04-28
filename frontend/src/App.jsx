import Check from "./componets/Check";
import Home from "./componets/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Howitworks from "./componets/Howitworks";
import AboutUs from "./componets/AboutUs";
import Login from "./componets/Login";
import Register from "./componets/Register";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Check" exact element={<Check />} />
          <Route path="/How It Works" exact element={<Howitworks />} />
          <Route path="/About Us" exact element={<AboutUs />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
