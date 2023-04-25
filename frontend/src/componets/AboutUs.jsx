import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import about_us from "../assets/xaboutus.jpg";
function AboutUs() {
  return (
    <div className="bg-[#EEECEC]">
      <Navigation />
      <div className="w-11/12 m-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-8 items-center">
        <div className="">
          <h1 className="md:text-2xl">
            We believe that managing certificates shouldn't be a burden, which
            is why we've created a user-friendly platform to help Professors
            save time and stay compliant.
          </h1>
        </div>
        <div className="">
          <img src={about_us} alt="about_us" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
