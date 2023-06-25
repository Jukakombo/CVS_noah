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
import DeleteCertificate from "./componets/DeleteCertificate";
import Certificates from "./componets/Certificates";
import SearchById from "./componets/SearchByID";
function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

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
          <Route
            path="/view-certificate/:id"
            exact
            element={<ViewCertificate />}
          />
          <Route path="/serach-by-id" exact element={<SearchById />} />

          <Route
            path="/admin"
            element={<Admin setUser={setUser} user={user} />}
          >
            <Route path="create-certificate" element={<CreateCertificate />} />
            <Route path="delete-certificate" element={<DeleteCertificate />} />
            <Route path="certificates" element={<Certificates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
