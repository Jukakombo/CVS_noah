import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Howitworks() {
  return (
    <div className="flex justify-between flex-col">
      <Navigation />
      <div className="w-11/12 m-auto">
        <div className="">
          <h1 className="text-xl font-bold py-8 heading">How it's works</h1>
          <div className="  pb-8 text-2xl">
            <p className="my-2">
              1. Log in to the Certificate Management System using your username
              and password.
            </p>
            <p className="my-2">
              2. Select the type of certificate you wish to manage from the list
              of available certificates.
            </p>
            <p className="my-2">
              3. Enter the details of the certificate, such as name, expiration
              date, and other relevant information.
            </p>
            <p className="my-2">
              4. Upload any necessary documents or files associated with the
              certificate.
            </p>
            <p className="my-2 ">
              5. Set up any necessary notifications for when a certificate is
              about to expire or needs to be renewed.
            </p>
            <p className="my-2 ">
              {" "}
              6. Monitor and track all certificates in your system, including
              their status and expiration dates.
            </p>
            <p className="my-2 ">
              7. Generate reports on certificates that are due for renewal or
              have expired. 8. Create new certificates as needed and assign them
              to users or groups within your organization.
            </p>
            <p className="my-2 ">
              9. Revoke any existing certificates that are no longer valid or
              needed by your organization.
            </p>
            <p className="my-2 ">
              10. Update any changes made to existing certificates in a timely
              manner to ensure accuracy and compliance with regulations and
              policies set forth by your organization or governing body
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Howitworks;
