import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">Awesome AGENCY</div>
      <div className="footer-info">
        <div>
          <p>Information</p>
          <div>
            About Us <br />
            Origins <br />
            FAQs <br />
            Contact <br />
            Legal <br />
          </div>
        </div>
        <div>
          <p>Contact us</p>
          <div>
            contact@awesomeagency.com <br />
            +216 000000 <br />
            The world,of Awesomeness <br />
          </div>
        </div>
      </div>
      <div className="footer-end">Follow us on social media</div>
    </footer>
  );
};

export default Footer;
