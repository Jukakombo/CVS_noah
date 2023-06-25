import React from "react";
import loading from "../assets/Ripple-1s-200px.svg";
function Loader() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <img src={loading} className="w-[60px]" alt="loader" />
      <h3>Loading ...</h3>
    </div>
  );
}

export default Loader;
