import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import signature from "../assets/x.png";
import certificate from "../assets/certificate.jpg";
import logo from "../assets/Uoj-logo.png";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
function ViewCertificate() {
  const params = useParams();
  const { id } = params;
  const studentsDatas = useSelector((state) => state.contacts);
  const studentData = studentsDatas.find((x) => x._id === id);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const currentDate = mm + "/" + dd + "/" + yyyy;
  const createPDF = async () => {
    const pdf = new jsPDF("landscape", "pt", "a4");
    const data = await document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("certifiate.pdf");
    });
  };
  return (
    <div>
      <Navigation />
      <div className="w-11/12 m-auto">
        <div id="pdf" className=" ">
          <div className="m-2 p-2 relative">
            <img
              className="w-[805px] h-[555px]"
              src={certificate}
              alt="certificate"
            />
            <div className="absolute top-14 left-0 right-0 px-16  w-[817px]  ">
              <div className="flex items-center justify-between py-2">
                <div className="">
                  <img src={logo} alt="logo" className="w-[50px]" />
                </div>
                <div className="">
                  <img
                    src={studentData?.profilePhoto}
                    alt="logo"
                    className="w-[50px] rounded"
                  />
                </div>
              </div>
              <h1 className="font-bold  text-center pb-4">
                Certificate of Completion
              </h1>
              <br />
              <p className="text-center">
                This is to certify that{" "}
                <span className="font-bold">
                  {studentData.firstName} &nbsp;
                  {studentData.lastName}
                </span>{" "}
                has Graduated University of Juba.
              </p>
              <br />
              <p className="text-center text-[16px]">
                Field Attend: {studentData.courseCompleted}
              </p>
              <p className="text-center">
                Grade Obtained:&nbsp;
                {studentData.gradeObtain}
              </p>

              <br />
              <p className="text-center">
                He/She successfully completed the course prescribed by the
                University of Juba
              </p>
              <p className="text-center">
                Years of Study: from&nbsp;
                <strong>{studentData?.startedYear} </strong>&nbsp;to &nbsp;
                <strong>{studentData?.completeYear}</strong>
              </p>

              <div className="flex justify-between items-center">
                <div className="">
                  <img
                    src={signature}
                    alt="signature"
                    className="w-[120px] h-[40px]"
                  />
                  <p>President/Chancellor</p>
                  <p className="font-bold">John Akec</p>
                  <p className="">Date:&nbsp;{currentDate}</p>
                </div>
                <div className="">Certificate No:&nbsp;{studentData._id}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={createPDF}
          type="button"
          className="   bg-blue-400 text-white rounded font-bold p-2 text-center  my-4"
        >
          Download my Certificate
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ViewCertificate;
