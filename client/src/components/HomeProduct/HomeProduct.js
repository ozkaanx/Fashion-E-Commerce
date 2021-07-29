import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react"; 
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "react-multi-carousel/lib/styles.css";
import "./hproduct.scss";

const HomeProduct = () => {
  const [uploads, setUploads] = useState([]);
  let history = useHistory();
  useEffect(() => {
    Axios.get(`http://localhost:8080/product/top-upload`).then((response) => {
      setUploads(response.data);
    });

  }, []);

  return (
    <div className="container mt-2" style={{ maxWidth: 1400 }}>
      <div className="sec-title" >
        <p>Öne Çıkan Ürünler</p>
        <a href="">
          <span>Tüm Ürünleri Gör</span>
        </a>
      </div>
      <hr />
      <div className="row mt-5" >
        {uploads.map((item) => (
          <div className="col-6 col-md-4 col-lg-3 product-col mb-3" key={item.productId}>
            <div
              className="h-item text-center"
              key={item.Id}
               onClick={() => {
                history.push(`/detail/${item.productId}`);
               }}
            >
              <div className="item-hover">
                <i className="fas fa-forward"></i>
                 Detay
              </div>
              <div className="h-img">
                <Image
                  cloudName="oz-yazilim"
                  publicId={item.image}
                  className="img-fluid"
                />
              </div>
              <div className="h-text">
                <h5>{item.productName} </h5>
                <h6>{item.productPrice} ₺</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
