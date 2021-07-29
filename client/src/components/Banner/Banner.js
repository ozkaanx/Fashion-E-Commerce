import React from "react";
import Benefit from "../Benefit/Benefit";
import banfoto from "../images/ban1.jpg";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="container mt-2" style={{ maxWidth: 1400 }}>
      <div className="row">
        <div className="col-md-6 mb-4 ">
          <div className="banner-item">
            <a href="#">
              <img className="img-fluid" src={banfoto} alt="" />
            </a>
            <div className="banner-content">
              <h4>New Products</h4>
              <h5>new products</h5>
              <h3>%50</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 ">
          <div className="banner-item">
            <a href="#">
              <img className="img-fluid" src={banfoto} alt="" />
            </a>
            <div className="banner-content">
              <h4>New Products</h4>
              <h5>new products</h5>
              <h3>%50</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
