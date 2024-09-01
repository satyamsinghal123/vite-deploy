import React from "react";
import "./About.css";
import doc2 from "../About us/doc2.png";

function About() {


  return (
    
    <>
      <div className="About-container">
        <div className="About-us">
          <h3>ABOUT US</h3>
          <p>
            The General Practice is a leading provider of discrete private
            healthcare in the Harley Street area. Our range of services includes
            expert primary care and health screening. We provide care tailored
            to the specific needs of our patients, both in the UK and
            internationally.
          </p>
          <p>
            We have a network of world-renowned consultants and specialists with
            whom we work closely .
          </p>
          <div className="About-us-box">
            <div className="About-us-head">
              <h3><span>DR RA</span>VLEEN SABHARWAL</h3>
              <img src={doc2} alt="" />
            </div>
            <div className="About-us-text">
              <p>
                Dr Ravleen Sabharwal is King's College London graduate with a
                Distinction in clinical medicine and is a member of both the
                Royal College of GPs and Physicians
              </p>

              <p>
                She has practiced for over 18 years, 10 years of which have been
                as a private GP. Her practice has an international focus, and
                she provides bespoke care to a number of Family Offices
              </p>

              <p>Ravleen combines a keen interest in lifestyle medicine, robust academic achievements
              and clinical acumen, with a commitment to concierge-style care.</p>

              <p>Her strong focus is on providing preventative healthcare including through a range of 
              screening services</p>

              <p>She also provides bespoke Occupational Health services for corporate clients across a 
              range of industries including Finance, Oil & Gas, Entertainment, Music and Fashion</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
