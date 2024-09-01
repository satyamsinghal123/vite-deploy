import React from "react";
import "./Services.css";
function Services() {
  return (
    <div className="services-container">
      <div className="breadcrumb">Services /Health screening</div>
      <br />
      <br />
      <div className="service-heading">
        <span className="services-cancer">HEALTH</span> SCREENING
      </div>
      <div className="service-description">
        <p>
          We place a significant emphasis on preventative healthcare and offer
          highly comprehensive and tailored executive health screening which is
          entirely bespoke to the individual.
        </p>
        <p>
          Cardiovascular fitness and risk of cardiovascular disease Body
          <br />
          composition and metabolic health, osteoporosis screening
        </p>

        <p>Cancer screening: Colorectal, Lung, Breast and Prostate
          <br />
        Novel Cancer screening (Tru-check blood tests and whole body MRI)</p>

        <p>Dementia screening</p>

        <p>Biological Age / Telomere Testing</p>

        <p>Pharmacogenomic Testing: testing individual sensitivity to drugs to predict drug efficacy and side effects 
        </p>

        <p>Genetic testing</p>
      </div>
      <div className="service-actions">
        <a href="#">BOOK AN APPOINTMENT</a>
        <a href="#">FEES</a>
      </div>
    </div>
  );
}

export default Services;
