import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="landing-container">
        <div className="content-wrapper">
          <h1 className="title">Welcome to SMS Logistics Invoice Generator</h1>
          <p className="subtitle">
            Choose the type of invoice you want to generate
          </p>
          <div className="button-container">
            <Link to="/freight-invoice">
              <button className="button freight-button">
              Freight Invoice
              </button>
            </Link>
            <Link to="/clearance-invoice">
              <button className="button clearance-button">
                Clearance Invoice
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
