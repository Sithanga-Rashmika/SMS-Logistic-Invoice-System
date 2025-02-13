import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const FreightInvoice = () => {
  const componentRef = useRef(null); // Ensure ref is properly initialized

  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null, // Ensure it's not undefined
    documentTitle: "Freight Invoice",
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      body {
        margin: 0;
        padding: 0;
      }
    `,
    onBeforePrint: () => console.log("Preparing to print..."),
    onAfterPrint: () => console.log("Print completed"),
  });

  return (
    <div>
      {/* Component to print */}
      <div
        ref={componentRef}
        style={{ width: "210mm", height: "297mm", padding: "20px" }}
      >
        <h1>Invoice</h1>
        <p>Customer Details...</p>
        <p>hellooo</p>
      </div>

      {/* Print button */}
      <button
        onClick={handlePrint}
        style={{ backgroundColor: "black", color: "white", marginTop: "10px" }}
      >
        Print Invoice
      </button>
    </div>
  );
};

export default FreightInvoice;
