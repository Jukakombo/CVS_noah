import React from "react";
import { jsPDF } from "jspdf";
import ViewCertificate from "./ViewCertificate";

function ReactToPDF() {
  const createPDF = async () => {
    const pdf = new jsPDF("landscape", "pt", "a4");
    const data = await document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("certifiate.pdf");
    });
  };
  return (
    <div className="border-2 border-red-300 w-[100%] h-[700px] text-center">
      <div id="pdf">
        <ViewCertificate />
      </div>
      <button
        onClick={createPDF}
        type="button"
        className="bg-blue-400 text-white rounded font-bold p-2 text-center m-2"
      >
        Download my Certificate
      </button>
    </div>
  );
}

export default ReactToPDF;
