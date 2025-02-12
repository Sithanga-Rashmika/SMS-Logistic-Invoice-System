import React from "react";

const Freight_Invoice = () => {
  return (
    <>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8 col-xxl-7">
              <div className="row gy-3 mb-3">
                <div className="row align-items-center">
                  <div className="col-6">
                    <h2 className="text-uppercase m-0">Invoice</h2>
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
                <div className="col-12">
                  <h4>From</h4>
                  <strong>BootstrapBrain</strong>
                  <address>
                    875 N Coast Hwy
                    <br />
                    Laguna Beach, California, 92651
                    <br />
                    United States
                    <br />
                    Phone: (949) 494-7695
                    <br />
                    Email: email@domain.com
                  </address>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-md-8">
                  <h4>Bill To</h4>
                  <strong>Mason Carter</strong>
                  <address>
                    7657 NW Prairie View Rd
                    <br />
                    Kansas City, Mississippi, 64151
                    <br />
                    United States
                    <br />
                    Phone: (816) 741-5790
                    <br />
                    Email: email@client.com
                  </address>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <h4>
                    <span className="col-6">Invoice #</span>
                    <span className="col-6 text-sm-end">INT-001</span>
                  </h4>
                  <div className="row">
                    <span className="col-6">Account</span>
                    <span className="col-6 text-sm-end">786-54984</span>
                    <span className="col-6">Order ID</span>
                    <span className="col-6 text-sm-end">#9742</span>
                    <span className="col-6">Invoice Date</span>
                    <span className="col-6 text-sm-end">12/10/2025</span>
                    <span className="col-6">Due Date</span>
                    <span className="col-6 text-sm-end">18/12/2025</span>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col" className="text-uppercase">
                            Qty
                          </th>
                          <th scope="col" className="text-uppercase">
                            Product
                          </th>
                          <th scope="col" className="text-uppercase text-end">
                            Unit Price
                          </th>
                          <th scope="col" className="text-uppercase text-end">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        <tr key="1">
                          <th scope="row">2</th>
                          <td>Console - Bootstrap Admin Template</td>
                          <td className="text-end">75</td>
                          <td className="text-end">150</td>
                        </tr>
                        <tr key="2">
                          <th scope="row">1</th>
                          <td>Planet - Bootstrap Blog Template</td>
                          <td className="text-end">29</td>
                          <td className="text-end">29</td>
                        </tr>
                        <tr key="3">
                          <th scope="row">4</th>
                          <td>Hello - Bootstrap Business Template</td>
                          <td className="text-end">32</td>
                          <td className="text-end">128</td>
                        </tr>
                        <tr key="4">
                          <th scope="row">1</th>
                          <td>Palette - Bootstrap Startup Template</td>
                          <td className="text-end">55</td>
                          <td className="text-end">55</td>
                        </tr>
                        <tr key="5">
                          <td colSpan="3" className="text-end">
                            Subtotal
                          </td>
                          <td className="text-end">362</td>
                        </tr>
                        <tr key="6">
                          <td colSpan="3" className="text-end">
                            VAT (5%)
                          </td>
                          <td className="text-end">18.1</td>
                        </tr>
                        <tr key="7">
                          <td colSpan="3" className="text-end">
                            Shipping
                          </td>
                          <td className="text-end">15</td>
                        </tr>
                        <tr key="8">
                          <th
                            scope="row"
                            colSpan="3"
                            className="text-uppercase text-end"
                          >
                            Total
                          </th>
                          <td className="text-end">$495.1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary mb-3">
                    Download Invoice
                  </button>
                  <button type="submit" className="btn btn-danger mb-3">
                    Submit Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Freight_Invoice;
