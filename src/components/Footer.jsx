import React from "react";
import doc from "../components/Contact/doctify.png"
import "../style/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="newsletter-section">
          <h1>Subscribe to our newsletter</h1>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter the email here" required="" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="footer-content">
          <div className="footer-left">
            <p>9 Harley Street London, W1G 9QY</p>
            <p>
              <a href="mailto:admin@thegeneralpractice.com">
                admin@thegeneralpractice.com
              </a>
            </p>
            <p>_________</p>
            <p>★★★★★</p>
            <p>
              Based on 88 reviews, Verified by{" "}
              <span><a href="https://www.doctify.com/uk/specialist/dr-ravleen-sabharwal" target="_blank"><img src={doc} /></a></span>
              <span className="doctify">Doctify</span>
            </p>
          </div>
          <div className="footer-center">
            <p>THE</p>
            <p className="brand">THE GENERAL PRACTICE</p>
            <p>LONDON</p>
          </div>
          <div className="footer-right">
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Terms &amp; Conditions</a>
            </p>
            <br />
            <p>© 2024 by The General Practice.</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
