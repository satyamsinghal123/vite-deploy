import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="Contact-container">
      <h3 className="contact-h3">
        <span>Contac</span>t Us
      </h3>
      <div className="contact-section">
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <p>Required fields are marked *</p>
          <form className="form-con">
            <div className="form-floating  mb-3 col-10">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name@example.com"
                required=""
              />
              <label htmlFor="name">Your Name *</label>
            </div>
            <div className="form-floating mb-3 col-10">
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="name@example.com"
                required=""
              />
              <label htmlFor="phone">Your Phone No. *</label>
            </div>
            <div className="form-floating mb-3 col-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required=""
              />
              <label htmlFor="email">Your Email *</label>
            </div>
            <div className="form-floating mb-3 col-10">
              <input
                type="text"
                className="form-control"
                id="message"
                placeholder="name@example.com"
                required=""
              />
              <label htmlFor="message">Your Message *</label>
            </div>
            <button className="Sumbit">Sumbit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Let’s Connect</h3>
          <p>
            Please contact us directly with any questions, comments, or
            scheduling enquiries you may have.
          </p>
          <div className="info-item">
            <i className="fas fa-map-marker-alt" />
            <div className="info-item-parti">
              <strong>Address</strong>
              <p>9 Harley Street, London, W1G 9QY</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope" />
            <div className="info-item-parti mail">
              <strong>Mailbox</strong>
              <p>admin@thegeneralpractice.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt" />
            <div className="info-item-parti">
              <strong>Phone no.</strong>
              <p>07393 501000</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-clock" />
            <div className="info-item-parti">
              <strong>Opening Hours</strong>
              <p>Mon - Fri 9:00 am - 6:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
