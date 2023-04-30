import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CreateCertificate from "./CreateCertificate";
import Certificates from "./Certificates";
import DeleteCertificate from "./DeleteCertificate";
function Admin() {
  return (
    <>
      <Navigation />
      <div className="bg-[#EB9FF8]">
        <div className="flex   w-11/12 m-auto py-8 ">
          <div className="sidebar bg-[#EB9FF8] border-2 border-white flex-[30%] p-4">
            {/* certificates */}
            <Link to="/certificates">
              <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                Students Certificates
              </div>
            </Link>

            {/* create certificate */}
            <Link to="/create-certificate">
              <div className="functions">
                <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                  Create Certificate
                </div>
              </div>
            </Link>
            {/* edit certifcate */}
            <Link to="/edit-certificate">
              <div className="functions">
                <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                  Edit Certificate
                </div>
              </div>
            </Link>
            {/* delete certificate */}
            <Link to="/delete-certificate">
              <div className="functions">
                <div className="p-2 bg-red-700  m-4 text-white rounded cursor-pointer">
                  Delete Certificate
                </div>
              </div>
            </Link>
            {/*logout  */}
            <Link to="/logout">
              <div className="functions">
                <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                  Logout
                </div>
              </div>
            </Link>
          </div>
          <div className="main_bar px-4 bg-white flex-[70%]">
            <CreateCertificate />
            <Certificates />
            <DeleteCertificate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
