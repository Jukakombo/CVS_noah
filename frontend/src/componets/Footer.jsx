import React from "react";
import logo from "../assets/Uoj-logo.png";
function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="primaryBackground py-4  ">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 primary__width">
          <div className="text-center flex flex-col items-center text-white">
            <img src={logo} className="w-[60px] text-center" alt="Logo" />
            <p>
              This system is designed to help you manage and track your
              certificates. With this system, you can easily store, organize,
              and access all of your certificates in one place.
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-white">Navigations</h1>
            <ul>
              <ul>
                <li className="text-xl text-white cursor-pointer">Home</li>
                <li className="text-xl text-white cursor-pointer">
                  Check / verify Certificate
                </li>
                <li className="text-xl text-white cursor-pointer">About Us</li>

                <li className="text-xl text-white cursor-pointer">Contact</li>
              </ul>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-white">Links</h1>
            <ul>
              <li className="text-xl text-white cursor-pointer">
                Privacy Policy
              </li>

              <li className="text-xl text-white cursor-pointer">
                How it works
              </li>
              <li className="text-xl text-white cursor-pointer">Admin/Login</li>
              <li className="text-xl text-white cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-white">Subscribe</h1>
            <ul>
              <li className="text-xl text-white cursor-pointer">
                Stay updated with us
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center flex-col">
                <input
                  type="text"
                  name="subscribe"
                  placeholder="Enter email...."
                  className="p-2 rounded w-full my-2 outline-none"
                />
                <button
                  type="submit"
                  className="btnPrimary text-white w-full my-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center copyright">
        <p>copyright &copy;{new Date().getFullYear()}. Allrights reserved</p>
        <p className="text-white">Developed by Noah Dujé</p>
      </div>
    </>
  );
}

export default Footer;
