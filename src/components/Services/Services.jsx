import React from "react";
import "./Services.css";
function Services() {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://www.pngitem.com/pimgs/m/424-4242774_maintenance-icon-png-clipart-png-download-operation-and.png"
          alt=""
          srcset=""
        />
        <h4>Full service charge is 1000/- Rs</h4>
      </div>
      <div className="card">
        <img
          src="https://thumbs.dreamstime.com/b/image-motorcycle-cafe-racer-r-style-vintage-style-your-template-shirt-logo-76355206.jpg"
          alt=""
          srcset=""
        />
        <h4>Bike Modification. Charges according to parts and service.</h4>
      </div>
      <div className="card">
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/58/90/bicycle-repair-workshop-logo-template-vector-13455890.jpg"
          alt=""
          srcset=""
        />
        <h4>Bike Repair.</h4>
      </div>
    </div>
  );
}

export default Services;
