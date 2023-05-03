import Check from "./componets/Check";
import Home from "./componets/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Howitworks from "./componets/Howitworks";
import AboutUs from "./componets/AboutUs";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Admin from "./componets/Admin";
import { useState } from "react";
import CreateCertificate from "./componets/CreateCertificate";
import ViewCertificate from "./componets/ViewCertificate";
import { getContacts } from "./actions/contacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const [user, setUser] = useState(true);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

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
          <Route path="/view-certificate" exact element={<ViewCertificate />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
