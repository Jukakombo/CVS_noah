import React from "react";
import Navigation from "./Navigation";
import Homepage from "./Homepage";
import Footer from "./Footer";
// import ReactToPDF from "./ReactToPDF";

function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  );
}

export default Home;
