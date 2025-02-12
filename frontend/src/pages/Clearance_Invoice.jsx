import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Clearance_Invoice = () => {
  const [rows, setRows] = useState([{ description: "", value: "" }]);
  const [CompanyName, setCompanyName] = useState("TECHNO SOLUTIONS PVT LTD");
  const [Add1, setAdd1] = useState("No.9, D.W. RUPASINGHE MAWATHA,");
  const [Add2, setAdd2] = useState("COLOMBO 10250");
  const [Contact, setContact] = useState("+94 112 824 606");
  const [Email, setEmail] = useState("sisira@technospl.com");
  const [InvoiceNo, setInvoiceNo] = useState("");
  const [InvoiceDate, setInvoiceDate] = useState("");
  const [Shipper, setShipper] = useState("");
  const [FLT, setFLT] = useState("");
  const [FLTDate, setFLTDate] = useState("");
  const [Awb, setAwb] = useState("");
  const [InvoiceVal, setInvoiceVal] = useState("");
  const [Goods, setGoods] = useState("");
  const [Advanced, setAdvanced] = useState(0.0);
  const [IOU, setIOU] = useState("");

  let Total = 0.0;
  let subtotal = 0.0;

  subtotal = rows.reduce((acc, row) => acc + Number(row.value || 0), 0);
  Total = subtotal - Number(Advanced);
  subtotal = subtotal.toFixed(2);
  Total = Total.toFixed(2);

  const addRow = () => {
    setRows([...rows, { description: "", value: "" }]);
  };

  const shippers = [
    "PERKIN ELMER PVT LTD SINGAPORE",
    "ENDRESS & HAUSER AG SWITZERLAND",
  ];

  const descriptions = [
    "AGENCY FEE",
    "HANDLING FEE",
    "DOCUMENTATION FEE",
    "SCREEN UNIT",
    "AIR LANKA CHARGES R/A",
    "AIR LINE CHARGES R/A",
    "MANIFEST",
    "CUSTOM DUTY",
    "VALUATION",
    "EXAMINATIONS",
    "INCIDENTAL EXPENSES",
    "TRANSPORT",
    "SUNDRY EXPENSES",
  ];
  const handleDownloadPDF = () => {
    
};


  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <div className="heading-container">
            <h2>ENTER INVOICE DETAILS</h2>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Company Name"
                value={CompanyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Address Line 1"
                value={Add1}
                onChange={(e) => {
                  setAdd1(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>Address Line 2</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Address Line 2"
                value={Add2}
                onChange={(e) => {
                  setAdd2(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Contact</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Contact No"
                value={Contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Type Email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>Invoice Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Invoice No"
                value={InvoiceNo}
                onChange={(e) => {
                  setInvoiceNo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Invoice Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Select Invoice Date"
                value={InvoiceDate}
                onChange={(e) => {
                  setInvoiceDate(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>Shipper</label>
              <input
                type="text"
                className="form-control"
                list="shippers-list"
                value={Shipper}
                onChange={(e) => setShipper(e.target.value)}
                placeholder="Select Shipper"
              />
              <datalist id="shippers-list">
                {shippers.map((shipper, i) => (
                  <option key={i} value={shipper} />
                ))}
              </datalist>
            </div>
            <div className="col-md-4">
              <label>FLT Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Select FLT Date"
                value={FLTDate}
                onChange={(e) => {
                  setFLTDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label>FLT No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type FLT No"
                value={FLT}
                onChange={(e) => {
                  setFLT(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>AWB No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type AWB No"
                value={Awb}
                onChange={(e) => {
                  setAwb(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>Invoice Value</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Invoice Value"
                value={InvoiceVal}
                onChange={(e) => {
                  setInvoiceVal(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Product Description</label>
              <textarea
                type="text"
                rows="2"
                className="form-control"
                placeholder="Type Product Description"
                value={Goods}
                onChange={(e) => {
                  setGoods(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label>Description</label>
            </div>
            <div className="col-md-6">
              <label>Value</label>
            </div>
          </div>
          {rows.map((row, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  list="descriptions-list"
                  value={row.description}
                  onChange={(e) => {
                    const newRows = [...rows];
                    newRows[index].description = e.target.value;
                    setRows(newRows);
                  }}
                  placeholder="Type Description"
                />
                <datalist id="descriptions-list">
                  {descriptions.map((desc, i) => (
                    <option key={i} value={desc} />
                  ))}
                </datalist>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={row.value}
                  onChange={(e) => {
                    const newRows = [...rows];
                    newRows[index].value = e.target.value;
                    setRows(newRows);
                  }}
                  placeholder="Type Amount"
                />
              </div>
            </div>
          ))}

          <div className="row mb-3">
            <div className="col-md-12">
              <button
                type="button"
                className="btn btn-primary"
                onClick={addRow}
              >
                Add Row & Save
              </button>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label>Advanced</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Advanced..."
                value={Advanced}
                onChange={(e) => {
                  setAdvanced(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label>IOU Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type IOU Numbers..."
                value={IOU}
                onChange={(e) => {
                  setIOU(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="invoice-view-container">
          <div className="heading-container">
            <h2>INVOICE LIVE VIEW</h2>
          </div>
          <section className="py-3 py-md-5" id="invoice-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 col-xl-8 col-xxl-7">
                  <div className="row gy-3 mb-3">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h3 className="text-uppercase m-0">
                          Invoice No# {InvoiceNo}
                        </h3>
                        <strong>
                          <span className="text-uppercase m-0">
                            Invoice Date: {InvoiceDate}
                          </span>
                        </strong>
                      </div>
                      <div className="col-6 text-end">
                        <a className="d-block" href="#">
                          <img
                            src="/sms Logistic logo.jpg"
                            className="img-fluid"
                            alt="BootstrapBrain Logo"
                            width="135"
                            height="44"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12 col-sm-6 col-md-8">
                      <h4>FROM</h4>
                      <strong>SMS LOGISTIC</strong>
                      <address>
                        525/2 DARANAGAMA
                        <br />
                        DELGODA, 11700
                        <br />
                        SRI LANKA
                        <br />
                        Phone: (+94) 76-196-7978
                        <br />
                        Email: sugath567@gmail.com
                      </address>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <h4>BILL TO</h4>
                      <strong>{CompanyName}</strong>
                      <address>
                        {Add1}
                        <br />
                        {Add2}
                        <br />
                        Phone: {Contact}
                        <br />
                        Email: {Email}
                      </address>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12 col-md-12">
                      <address>
                        <strong>SHIPPER: </strong>
                        {"  " + Shipper}
                        <br />
                        <strong>FLT & DATE: </strong>
                        {"  " + FLT + " " + FLTDate}
                        <br />
                        <strong>AWB NO: </strong>
                        {"  " + Awb}
                        <br />
                        <strong>INVOICE NO: </strong>
                        {"  " + InvoiceVal}
                        <br />
                        <strong>DESCRIPTION: </strong>
                        {"  " + Goods}
                        <br />
                      </address>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col" className="text-uppercase">
                                No
                              </th>
                              <th scope="col" className="text-uppercase">
                                DESCRIPTION
                              </th>
                              <th
                                scope="col"
                                className="text-uppercase text-end"
                              >
                                AMOUNT
                              </th>
                            </tr>
                          </thead>
                          <tbody className="table-group-divider">
                            {rows.map((row, index) => (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{row.description}</td>
                                <td className="text-end">{row.value}</td>
                              </tr>
                            ))}
                            <tr key="5">
                              <td colSpan="2" className="text-end">
                                SUBTOTAL
                              </td>
                              <td className="text-end">{subtotal}</td>
                            </tr>
                            <tr key="6">
                              <td colSpan="2" className="text-end">
                                IOU({IOU + "  "})ADVANCED
                              </td>
                              <td className="text-end">{Advanced}</td>
                            </tr>
                            <tr key="8">
                              <th
                                scope="row"
                                colSpan="2"
                                className="text-uppercase text-end"
                              >
                                BALANCE
                              </th>
                              <td className="text-end">{Total}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="heading-container">
            <button type="submit" className="btn btn-primary mb-3" onClick={handleDownloadPDF}>
              Download Invoice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clearance_Invoice;
