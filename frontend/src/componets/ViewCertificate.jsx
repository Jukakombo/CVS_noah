import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import signature from "../assets/x.png";
import certificate from "../assets/certificate.jpg";
import logo from "../assets/Uoj-logo.png";
import { useParams } from "react-router-dom";
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
  return (
    <div>
      <Navigation />
      <div className="border-2 border-green-600  m-4  w-11/12 m-auto">
        <div className="m-4 p-4 relative">
          <img className="w-full" src={certificate} alt="certificate" />
          <div className="absolute top-20 px-32">
            <div className="flex items-center justify-between py-2">
              <div className="">
                <img src={logo} alt="logo" className="w-[90px]" />
              </div>
              <div className="">
                <img
                  src={studentData?.profilePhoto}
                  alt="logo"
                  className="w-[90px] rounded"
                />
              </div>
            </div>
            <h1 className="font-bold  text-center pb-4">
              Certificate of Graduation
            </h1>
            <p className="  text-xl">
              This certifies that{" "}
              <span className="font-bold">
                {studentData.firstName} &nbsp;
                {studentData.lastName}
              </span>{" "}
              has successfully completed the requirements for graduation from{" "}
              Juba University
            </p>
            <p>
              Field of Study: {studentData.courseCompleted} Grade
              Obtained:&nbsp;
              {studentData.gradeObtain}
            </p>
            <p>
              Years of Study: {studentData.startedYear} -{" "}
              {studentData.completeYear}
            </p>
            <p>
              This achievement is a testament to {studentData.firstName} &nbsp;
              {studentData.lastName} hard work, dedication, and commitment to
              academic excellence. Throughout their time at [Institution's
              Name], they have demonstrated exceptional proficiency in their
              chosen field, acquiring valuable skills and knowledge that will
              serve as a solid foundation for their future endeavors.
            </p>
            <p>
              We extend our heartfelt congratulations to [Student's Full Name]
              for their remarkable accomplishment. They have exhibited the
              qualities of a diligent and motivated individual, and we have no
              doubt that they will continue to achieve great success in all
              their future endeavors.
            </p>

            <div className="flex justify-between items-center">
              <div className="">
                <p className="pt-8">Date:&nbsp;{currentDate}</p>
                <img src={signature} alt="signature" className="w-[120px]" />
                <p>President/Chancellor</p>
                <p className="font-bold">John Akec</p>
              </div>
              <div className="">Certificate No:&nbsp;{studentData._id}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewCertificate;
