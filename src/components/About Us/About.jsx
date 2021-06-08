import React from "react";
import "./About.css";
function About() {
  return (
    <div className="About">
      <p className="about_title">
        We promise you that HONDA bike will be best buddy for you.
      </p>
      <div className="container">
        <div className="contact">
          <p className="reachUs">Reach US</p>
          <p className="number">
            <i className="fas fa-phone"></i> +91 7838378483
          </p>
          <a className="location" href="https://goo.gl/maps/17D9AhWkMkEqLcGi8">
            <p>
              <i className="fas fa-map-marker-alt"></i> Khetiya Road, Pansemal,
              Barwani - 451770, Near Petrol Pump
            </p>
          </a>

          <img
            src="https://content3.jdmagicbox.com/comp/barwani/j2/9999p7290.7290.140512111451.v2j2/catalogue/pragati-honda-pansemal-barwani-motorcycle-dealers-honda-authorised--56t5kb12sy-250.jpeg"
            alt="Show room"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
